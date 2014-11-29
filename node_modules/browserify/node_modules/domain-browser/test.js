// Import
var events = require('events');
var expect = require('chai').expect;
var joe = require('joe');
var domain = require('./');

// =====================================
// Tests

joe.describe('domain-browser', function(describe,it){
	it('should work on throws', function(done){
		var d = domain.create();
		d.on('error', function(err){
			expect(err && err.message).to.eql('a thrown error');
			done();
		});
		d.run(function(){
			throw new Error('a thrown error');
		});
	});

	it('should be able to add emitters', function(done){
		var d = domain.create();
		var emitter = new events.EventEmitter();

		d.add(emitter);
		d.on('error', function (err) {
			expect(err && err.message).to.eql('an emitted error');
			done();
		});

		emitter.emit('error', new Error('an emitted error'));
	});

	it('should be able to remove emitters', function (done){
		var emitter = new events.EventEmitter();
		var d = domain.create();

		d.add(emitter);
		var domainGotError = false;
		d.on('error', function (err) {
			domainGotError = true
		});

		emitter.on('error', function (err) {
			expect(err && err.message).to.eql('This error should not go to the domain')

			// Make sure nothing race condition-y is happening
			setTimeout(function () {
				expect(domainGotError).to.eql(false)
				done()
			}, 0)
		})

		d.remove(emitter);
		emitter.emit('error', new Error('This error should not go to the domain'));
	})
});