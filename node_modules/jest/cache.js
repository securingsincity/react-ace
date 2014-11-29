var Class = require('sji');

var Cache = module.exports = Class.extend({
    init:function () {
    },
    get:function (key, callback) {
        callback(null, null)
    },
    set:function (key, value, callback) {
        callback(null)
    }
});


