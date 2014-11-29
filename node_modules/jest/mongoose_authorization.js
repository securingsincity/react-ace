var _ = require('underscore'),
    Authorization = require('./authorization');

var MongooseAuthorization = module.exports = Authorization.extend({
    init:function (user_field) {
        this._super();
        this.user_field = user_field;
    },

    get_user_id:function (req) {
        return null;
    },

    limit_object_list:function (req, query, callback) {
        var user_id = this.get_user_id(req);
        if (!user_id)
            callback({message:'cant get user id'});
        else {
            query.where(this.user_field, user_id);
            callback(null, query);
        }
    },

    limit_object:function (req, object, callback) {
        var user_id = this.get_user_id(req);
        if (!user_id)
            callback({message:'cant get user id'});
        else {
            object.set(this.user_field, user_id);
            callback(null, object);
        }
    },

    edit_object:function (req, object, callback) {
        var user_id = this.get_user_id(req);
        if (!user_id)
            callback({message:'cannot get user id'});
        else {
            object[this.user_field] = user_id;
            callback(null, object);
        }
    }
});

