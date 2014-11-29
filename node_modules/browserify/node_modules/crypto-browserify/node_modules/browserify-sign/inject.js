var sign = require('./sign');
var verify = require('./verify');
var Writable = require('readable-stream').Writable;
var inherits = require('inherits');
var algos = require('./algos');
'use strict';
module.exports = function (exports, crypto) {
	exports.createSign = createSign;
	function createSign(algorithm) {

		return new Sign(algorithm, crypto);
	}
	exports.createVerify = createVerify;
	function createVerify(algorithm) {
		return new Verify(algorithm, crypto);
	}
};
inherits(Sign, Writable);
function Sign(algorithm, crypto) {
	Writable.call(this);
	var data = algos[algorithm];
	if (!data) {
		throw new Error('Unknown message digest');
	}
	this._hash = crypto.createHash(data.hash);
	this._tag = data.id;
	this._crypto = crypto;
};
Sign.prototype._write = function _write(data, _, done) {
	this._hash.update(data);
	done();
};
Sign.prototype.update = function update(data) {
	this.write(data);
	return this;
};

Sign.prototype.sign = function signMethod(key, enc) {
	this.end();
	var hash = this._hash.digest();
	var sig = sign(Buffer.concat([this._tag, hash]), key, this._crypto);
	if (enc) {
		sig = sig.toString(enc);
	}
	return sig;
};

inherits(Verify, Writable);
function Verify(algorithm, crypto) {
	Writable.call(this);
	var data = algos[algorithm];
	if (!data) {
		throw new Error('Unknown message digest');
	}
	this._hash = crypto.createHash(data.hash);
	this._tag = data.id;
};
Verify.prototype._write = function _write(data, _, done) {
	this._hash.update(data);
	done();
};
Verify.prototype.update = function update(data) {
	this.write(data);
	return this;
};

Verify.prototype.verify = function verifyMethod(key, sig, enc) {
	this.end();
	var hash = this._hash.digest();
	if (!Buffer.isBuffer(sig)) {
		sig = new Buffer(sig, enc);
	}
	return verify(sig, Buffer.concat([this._tag, hash]), key);
};