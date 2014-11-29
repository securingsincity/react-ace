var Class = require('sji');

var Authentication = module.exports = Class.extend({
    init:function () {
    },
    // does the request is authenticated, callback false will return 401
    is_authenticated:function (req, callback) {
        callback(null, true);
    },
    // get a request identifier, uses for throttling (optional)
    get_request_identifier:function (req) {
        return req.connection.remoteAddress;
    }
});




