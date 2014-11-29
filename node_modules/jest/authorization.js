var _ = require('underscore'),
    Class = require('sji');

var Authorization = module.exports = Class.extend({
    init:function () {
    },

    // is request is authorized, callback false will return 401
    is_authorized:function (req, callback) {
        callback(null, true);
    },

    // USE ONLY WITH MONGOOSE RESOURCE
    // limit an object list to only allow authorized data
    limit_object_list:function (req, objects, callback) {
        // add further filter on object list
        callback(null, objects);
    },

    // USE ONLY WITH MONGOOSE RESOURCE
    // limit single object, callback(null,object) to allow, callback(null,null) to block
    limit_object:function (req, object, callback) {
        callback(null, object);
    },

    // USE ONLY WITH MONGOOSE RESOURCE
    edit_object:function (req, object, callback) {
        // edits an object right before it's being saved
        callback(null, object);
    }

});

