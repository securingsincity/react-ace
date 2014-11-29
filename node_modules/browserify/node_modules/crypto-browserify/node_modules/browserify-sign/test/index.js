var test = require('tape');
var fs = require('fs');
var priv1024 = fs.readFileSync(__dirname + '/rsa.1024.priv');
var rsa1024 = {
	private: fs.readFileSync(__dirname + '/rsa.1024.priv'),
	public: fs.readFileSync(__dirname + '/rsa.1024.pub')
}
var rsa2028 = {
	private: fs.readFileSync(__dirname + '/rsa.2028.priv'),
	public: fs.readFileSync(__dirname + '/rsa.2028.pub')
}
var nonrsa1024 = {
	private: fs.readFileSync(__dirname + '/1024.priv'),
	public: fs.readFileSync(__dirname + '/1024.pub')
}
var pass1024 = {
	private: {
		passphrase: 'fooo',
		key:fs.readFileSync(__dirname + '/pass.1024.priv')
	},
	public: fs.readFileSync(__dirname + '/pass.1024.pub')
}
var ec = {
	private: fs.readFileSync(__dirname + '/ec.priv'),
	public: fs.readFileSync(__dirname + '/ec.pub')
}
var ecpass = {
	private: {
		key: fs.readFileSync(__dirname + '/ec.pass.priv'),
		passphrase: 'bard'
	},
	public: fs.readFileSync(__dirname + '/ec.pub')
}
function isNode10() {
  return process.version && process.version.split('.').length === 3 && parseInt(process.version.split('.')[1], 10) <= 10;
}
var nodeCrypto = require('crypto');
var myCrypto = require('../');
function testIt(keys, message, scheme) {
	var pub = keys.public;
	var priv = keys.private;
	test(message.toString(), function (t) {
		t.plan(4);
		var mySign = myCrypto.createSign(scheme);
		var nodeSign = nodeCrypto.createSign(scheme);
		var mySig = mySign.update(message).sign(priv);
		var nodeSig = nodeSign.update(message).sign(priv);
		t.equals(mySig.length, nodeSig.length, 'correct length');
		t.equals(mySig.toString('hex'), nodeSig.toString('hex'), 'equal sigs');
		var myVer = myCrypto.createVerify(scheme);
		var nodeVer = nodeCrypto.createVerify(scheme);
		t.ok(nodeVer.update(message).verify(pub, mySig), 'node validate my sig');
		t.ok(myVer.update(message).verify(pub, nodeSig), 'me validate node sig');
	});
}
function ectestIt(keys, message, scheme) {
	var pub = keys.public;
	var priv = keys.private;
	test(message.toString(), function (t) {
		t.plan(3);
		
		var nodeSign = nodeCrypto.createSign(scheme);
		var mySign = myCrypto.createSign(scheme);
		var mySig = mySign.update(message).sign(priv);
		var nodeSig = nodeSign.update(message).sign(priv);
		t.notEqual(mySig.toString('hex'), nodeSig.toString('hex'), 'not equal sigs');
		var myVer = myCrypto.createVerify(scheme);
		var nodeVer = nodeCrypto.createVerify(scheme);
		t.ok(nodeVer.update(message).verify(pub, mySig), 'node validate my sig');
		t.ok(myVer.update(message).verify(pub, nodeSig), 'me validate node sig');
	});
}
ectestIt(ec, new Buffer('ecdsa with sha1'), 'ecdsa-with-SHA1');

testIt(rsa1024, new Buffer('sha1 with 1024 keys'), 'RSA-SHA1');
testIt(rsa2028, new Buffer('sha1 with 2028 keys'), 'RSA-SHA1');
testIt(nonrsa1024, new Buffer('sha1 with 1024 keys non-rsa key'), 'RSA-SHA1');
testIt(rsa1024, new Buffer('sha224 with 1024 keys'), 'RSA-SHA224');
testIt(nonrsa1024, new Buffer('sha224 with 1024 keys non-rsa key'), 'RSA-SHA224');
testIt(rsa2028, new Buffer('sha224 with 2028 keys'), 'RSA-SHA224');
testIt(rsa1024, new Buffer('SHA256 with 1024 keys'), 'RSA-SHA256');
testIt(nonrsa1024, new Buffer('sha256 with 1024 keys non-rsa key'), 'RSA-SHA256');
testIt(rsa2028, new Buffer('SHA256 with 2028 keys'), 'RSA-SHA256');
testIt(rsa1024, new Buffer('SHA384 with 1024 keys'), 'RSA-SHA384');
testIt(nonrsa1024, new Buffer('sha384 with 1024 keys non-rsa key'), 'RSA-SHA384');
testIt(rsa2028, new Buffer('SHA384 with 2028 keys'), 'RSA-SHA384');
testIt(rsa1024, new Buffer('SHA512 with 1024 keys'), 'RSA-SHA512');
testIt(nonrsa1024, new Buffer('sha512 with 1024 keys non-rsa key'), 'RSA-SHA512');
testIt(rsa2028, new Buffer('SHA512 with 2028 keys'), 'RSA-SHA512');
if (!isNode10()) {
	ectestIt(ecpass, new Buffer('ecdsa with password'), 'ecdsa-with-SHA1');
	testIt(pass1024, new Buffer('sha1 with 1024 keys and password'), 'RSA-SHA1');
	testIt(pass1024, new Buffer('sha224 with 1024 keys and password'), 'RSA-SHA224');
	testIt(pass1024, new Buffer('sha256 with 1024 keys and password'), 'RSA-SHA256');
	testIt(pass1024, new Buffer('sha384 with 1024 keys and password'), 'RSA-SHA384');
	testIt(pass1024, new Buffer('sha512 with 1024 keys and password'), 'RSA-SHA512');
}