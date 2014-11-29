var express = require('express')
    , Resource = require('express-resource')
    , util = require('util')
    , api = require('../api')
    , resources = require('../mongoose_resource')
    , base_resource = require('../resource')
    , cache = require('../cache')
    , app = express.createServer();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/api_db');

// create mongoose model
var User = mongoose.model('user', new Schema({
    username: String,
    email: String,
    password : String,
    index:Number
}));

// create api with path
var rest_api = new api.Api('/api/',app);

var MemoryCache  = function() {
    this.mem = {};
};
util.inherits(MemoryCache,cache.Cache);

MemoryCache.prototype.get = function(key,callback)
{
    callback(null,this.mem[key]);
};

MemoryCache.prototype.set = function(key,value,callback)
{
    this.mem[key] = value;
    callback();
};
function extend(super,constructor)
{
    util.inherits(constructor,super);
    return constructor;
}

// create mongoose-resource for User model
var UserResource = extend(resources.MongooseResource, function()
{
    UserResource.super_.call(this,User);
    this.fields = ['username','index','id'];
    this.default_query = function(query)
    {
        return query.where('index').gte(10);
    };
    this.filtering = {'index':0};
    this.cache = new MemoryCache();
});

UserResource.prototype.get_object = function(req,id,callback)
{
    UserResource.super.get_object.call(this,req,id,function(err,object)
    {
        callback(null,object.set('username','overriden'));
    });
};

// register resource to api
rest_api.register_resource('users',new UserResource());


app.listen(80);