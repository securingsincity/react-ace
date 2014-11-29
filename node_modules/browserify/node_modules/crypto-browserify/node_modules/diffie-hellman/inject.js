var primes = require('./primes.json');
var DH = require('./dh');
var generatePrime = require('./generatePrime');
module.exports = function (crypto, exports) {
	exports.DiffieHellmanGroup =
    exports.createDiffieHellmanGroup =
    exports.getDiffieHellman = DiffieHellmanGroup;
	function DiffieHellmanGroup(mod) {
		return new DH(new Buffer(primes[mod].prime, 'hex'),
			new Buffer(primes[mod].gen, 'hex'), crypto);
	}
	exports.createDiffieHellman = exports.DiffieHellman = DiffieHellman;
	function DiffieHellman(prime, enc, generator, genc) {
		
		if (Buffer.isBuffer(enc) ||
			(typeof enc === 'string' && ['hex', 'binary', 'base64'].indexOf(enc) === -1)) {
			genc = generator;
			generator = enc
			enc = void 0;
		}
		enc = enc || 'binary';
		genc = genc || 'binary';
		generator = generator || new Buffer([2]);
		if (!Buffer.isBuffer(generator)) {
			generator = new Buffer(generator, genc);
		}
		if (typeof prime === 'number') {
			return new DH(generatePrime(prime, generator, crypto), generator, crypto, true);
		}
		if (!Buffer.isBuffer(prime)) {
			prime = new Buffer(prime, enc);
		}
		
		return new DH(prime, generator, crypto, true);
	};
}