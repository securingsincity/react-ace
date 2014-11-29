var mods = [
   'secp256k1'
];
var test = require('tape');
var crypto = require('../');
test('createECDH', function (t) {
mods.forEach(function (mod) {
    t.test(mod + ' uncompressed', function (t){
      t.plan(2);
      var dh1 = crypto.createECDH(mod);
      dh1.generateKeys();
      var dh2 = crypto.createECDH(mod);
      dh2.generateKeys();
      var pubk1 = dh1.getPublicKey();
      var pubk2 = dh2.getPublicKey();
      t.notEquals(pubk1.toString('hex'), pubk2.toString('hex'), 'diff public keys');
      var pub1 = dh1.computeSecret(pubk2).toString('hex');
      var pub2 = dh2.computeSecret(pubk1).toString('hex');
      t.equals(pub1, pub2, 'equal secrets');
    });
    t.test(mod + ' compressed', function (t){
      t.plan(2);
      var dh1 = crypto.createECDH(mod);
      dh1.generateKeys();
      var dh2 = crypto.createECDH(mod);
      dh2.generateKeys();
      var pubk1 = dh1.getPublicKey(null, 'compressed');
      var pubk2 = dh2.getPublicKey(null, 'compressed');
      t.notEquals(pubk1.toString('hex'), pubk2.toString('hex'), 'diff public keys');
      var pub1 = dh1.computeSecret(pubk2).toString('hex');
      var pub2 = dh2.computeSecret(pubk1).toString('hex');
      t.equals(pub1, pub2, 'equal secrets');
    });
    t.test(mod + ' set stuff', function (t){
      t.plan(5);
      var dh1 = crypto.createECDH(mod);
      var dh2 = crypto.createECDH(mod);
      dh1.generateKeys();
      dh2.generateKeys();
      dh1.setPrivateKey(dh2.getPrivateKey());
      dh1.setPublicKey(dh2.getPublicKey());
      var priv1 = dh1.getPrivateKey('hex');
      var priv2 = dh2.getPrivateKey('hex');
      t.equals(priv1, priv2, 'same private key');
      var pubk1 = dh1.getPublicKey();
      var pubk2 = dh2.getPublicKey();
      t.equals(pubk1.toString('hex'), pubk2.toString('hex'), 'same public keys, uncompressed');
      t.equals(dh1.getPublicKey('hex', 'compressed'), dh2.getPublicKey('hex', 'compressed'), 'same public keys compressed');
      t.equals(dh1.getPublicKey('hex', 'hybrid'), dh2.getPublicKey('hex', 'hybrid'), 'same public keys hybrid');
      var pub1 = dh1.computeSecret(pubk2).toString('hex');
      var pub2 = dh2.computeSecret(pubk1).toString('hex');
      t.equals(pub1, pub2, 'equal secrets');
    });
  });
});