// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
var parseKeys = require('./parseKeys');
var bn = require('bn.js');
var elliptic = require('elliptic');
module.exports = sign;
function sign(hash, key, crypto) {
  var priv = parseKeys(key, crypto);
  if (priv.curve) {
    return ecSign(hash, priv, crypto);
  }
  var len = priv.modulus.byteLength();
  var pad = [ 0, 1 ];
  while (hash.length + pad.length + 1 < len) {
    pad.push(0xff);
  }
  pad.push(0x00);
  var i = -1;
  while (++i < hash.length) {
    pad.push(hash[i]);
  }
  
  var out = crt(pad, priv);
  if (out.length < len) {
    var prefix = new Buffer(len - out.length);
    prefix.fill(0);
    out = Buffer.concat([prefix, out], len);
  }
  return out;
}
function crt(msg, priv) {
  var c1 = new bn(msg).toRed(bn.mont(priv.prime1));
  var c2 = new bn(msg).toRed(bn.mont(priv.prime2));
  var qinv = new bn(priv.coefficient);
  var p = new bn(priv.prime1);
  var q = new bn(priv.prime2);
  var m1 = c1.redPow(priv.exponent1)
  var m2 = c2.redPow(priv.exponent2);
  m1 = m1.fromRed();
  m2 = m2.fromRed();
  var h = m1.isub(m2).imul(qinv).mod(p);
  h.imul(q);
  m2.iadd(h);
  return new Buffer(m2.toArray());
}
function ecSign(hash, priv, crypto) {
  elliptic.rand = crypto.randomBytes;
  var curve;
  if (priv.curve.join('.')  === '1.3.132.0.10') {
    curve = new elliptic.ec('secp256k1');
  }
  var key = curve.genKeyPair();
  key._importPrivate(priv.privateKey);
  var out = key.sign(hash);
  return new Buffer(out.toDER());
}