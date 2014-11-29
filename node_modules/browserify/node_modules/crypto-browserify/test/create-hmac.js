
var test = require('tape')

var algorithms = ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
var vectors = require('hash-test-vectors/hmac')
var createHmac = require('../create-hmac')

algorithms.forEach(function (alg) {

  test('hmac('+alg+')', function (t) {
    vectors.forEach(function (input, i) {
      var output = createHmac(alg, new Buffer(input.key, 'hex'))
          .update(input.data, 'hex').digest()

      output = input.truncate ? output.slice(0, input.truncate) : output
      t.equal(output.toString('hex'), input[alg])
    })
    t.end()
  })

  test('hmac('+alg+')', function (t) {
    vectors.forEach(function (input, i) {
      var hmac = createHmac(alg, new Buffer(input.key, 'hex'))

      hmac.end(input.data, 'hex')
      var output = hmac.read()

      output = input.truncate ? output.slice(0, input.truncate) : output
      t.equal(output.toString('hex'), input[alg])
    })
    t.end()
  })

})



