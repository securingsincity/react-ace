var Class = require('sji');

var Throttling = module.exports = Class.extend({
    init:function () {
    },
    throttle:function (identifier, callback) {
        callback(null, false);
    }
});