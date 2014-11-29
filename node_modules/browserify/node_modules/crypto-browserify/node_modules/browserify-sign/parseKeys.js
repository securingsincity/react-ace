var pemstrip = require('pemstrip');
var asn1 = require('./asn1');
var aesid = require('./aesid.json');
module.exports = parseKeys;

function parseKeys(buffer, crypto) {
	var password;
	if (typeof buffer === 'object' && !Buffer.isBuffer(buffer)) {
		password = buffer.passphrase;
		buffer = buffer.key;
	}
	var stripped = pemstrip.strip(buffer);
	var type = stripped.tag;
	var data = new Buffer(stripped.base64, 'base64');
	var subtype,ndata;
	switch (type) {
		case 'PUBLIC KEY':
		  ndata = asn1.PublicKey.decode(data, 'der');
		  subtype = ndata.algorithm.algorithm.join('.');
		  switch(subtype) {
		  	case '1.2.840.113549.1.1.1':
		  	  return asn1.RSAPublicKey.decode(ndata.subjectPublicKey.data, 'der');
		  	case '1.2.840.10045.2.1':
		  		return {
		  			type: 'ec',
		  			data:  asn1.ECPublicKey.decode(data, 'der')
		  		};
		  	default: throw new Error('unknown key id ' +  subtype);
		  }
		  throw new Error('unknown key type ' +  type);
		case 'ENCRYPTED PRIVATE KEY':
		  data = asn1.EncryptedPrivateKey.decode(data, 'der');
		  data = decrypt(crypto, data, password);
		  //falling through
		case 'PRIVATE KEY':
		  ndata = asn1.PrivateKey.decode(data, 'der');
		  subtype = ndata.algorithm.algorithm.join('.');
		  switch(subtype) {
		  	case '1.2.840.113549.1.1.1':
		  	  return asn1.RSAPrivateKey.decode(ndata.subjectPrivateKey, 'der');
		  	case '1.2.840.10045.2.1':
		  	  ndata =  asn1.ECPrivateWrap.decode(data, 'der');
		  	  return {
		  	  	curve: ndata.algorithm.curve,
		  	  	privateKey: asn1.ECPrivateKey.decode(ndata.subjectPrivateKey, 'der').privateKey
		  	  };
		  	default: throw new Error('unknown key id ' +  subtype);
		  }
		  throw new Error('unknown key type ' +  type);
		case 'RSA PUBLIC KEY':
		  return asn1.RSAPublicKey.decode(data, 'der');
		case 'RSA PRIVATE KEY':
		  return asn1.RSAPrivateKey.decode(data, 'der');
		case 'EC PRIVATE KEY':
		  data = asn1.ECPrivateKey.decode(data, 'der');
		  return {
		  	curve: data.parameters.value,
		  	privateKey: data.privateKey
		  }
		default: throw new Error('unknown key type ' +  type);
	}
}
function decrypt(crypto, data, password) {
  var salt = data.algorithm.decrypt.kde.kdeparams.salt;
  var iters = data.algorithm.decrypt.kde.kdeparams.iters;
  var algo = aesid[data.algorithm.decrypt.cipher.algo.join('.')];
  var iv = data.algorithm.decrypt.cipher.iv;
  var cipherText = data.subjectPrivateKey;
  var keylen = parseInt(algo.split('-')[1], 10)/8;
  var key = crypto.pbkdf2Sync(password, salt, iters, keylen);
  var cipher = crypto.createDecipheriv(algo, key, iv);
  var out = [];
  out.push(cipher.update(cipherText));
  out.push(cipher.final());
  return Buffer.concat(out);
}