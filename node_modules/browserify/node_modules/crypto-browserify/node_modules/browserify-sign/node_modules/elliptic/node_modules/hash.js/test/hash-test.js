var assert = require('assert');
var hash = require('../');

describe('Hash', function() {
  it('should support sha256', function() {
    assert.equal(hash.sha256.blockSize, 512);
    assert.equal(hash.sha256.outSize, 256);

    var test = [
      [ 'abc',
        'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad' ],
      [ 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1' ],
      [ 'deadbeef',
        '5f78c33274e43fa9de5659265c1d917e25c03722dcb0b8d27db8d5feaa813953',
        'hex' ],
    ];
    for (var i = 0; i < test.length; i++) {
      var msg = test[i][0];
      var res = test[i][1];
      var enc = test[i][2];

      var dgst = hash.sha256().update(msg, enc).digest('hex');
      assert.equal(dgst, res);

      // Split message
      var dgst = hash.sha256()
                     .update(msg.slice(0, 2), enc)
                     .update(msg.slice(2), enc)
                     .digest('hex');
      assert.equal(dgst, res);
    }
  });

  it('should support sha224', function() {
    assert.equal(hash.sha224.blockSize, 512);
    assert.equal(hash.sha224.outSize, 224);

    var test = [
      [ 'abc',
        '23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7' ],
      [ 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        '75388b16512776cc5dba5da1fd890150b0c6455cb4f58b1952522525' ],
      [ 'deadbeef',
        '55b9eee5f60cc362ddc07676f620372611e22272f60fdbec94f243f8',
        'hex' ],
    ];
    for (var i = 0; i < test.length; i++) {
      var msg = test[i][0];
      var res = test[i][1];
      var enc = test[i][2];

      var dgst = hash.sha224().update(msg, enc).digest('hex');
      assert.equal(dgst, res);

      // Split message
      var dgst = hash.sha224()
                     .update(msg.slice(0, 2), enc)
                     .update(msg.slice(2), enc)
                     .digest('hex');
      assert.equal(dgst, res);
    }
  });

  it('should support ripemd160', function() {
    assert.equal(hash.ripemd160.blockSize, 512);
    assert.equal(hash.ripemd160.outSize, 160);

    var test = [
      [ '', '9c1185a5c5e9fc54612808977ee8f548b2258d31'],
      [ 'abc',
        '8eb208f7e05d987a9b044a8e98c6b087f15a0bfc' ],
      [ 'message digest',
        '5d0689ef49d2fae572b881b123a85ffa21595f36' ],
      [ 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        '12a053384a9c0c88e405a06c27dcf49ada62eb2b' ],
      [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        'b0e20b6e3116640286ed3a87a5713079b21f5189' ],
    ];
    for (var i = 0; i < test.length; i++) {
      var msg = test[i][0];
      var res = test[i][1];
      var enc = test[i][2];

      var dgst = hash.ripemd160().update(msg, enc).digest('hex');
      assert.equal(dgst, res);

      // Split message on odd boundary
      var dgst = hash.ripemd160()
                     .update(msg.slice(0, 3), enc)
                     .update(msg.slice(3), enc)
                     .digest('hex');
      assert.equal(dgst, res);
    }
  });
});
