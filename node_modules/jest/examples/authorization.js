

var express = require('express')
    ,jest = require('../index')
    ,mongoose = require('mongoose');

var User = new mongoose.Schema({
    email:{type:String,trim:true,lowercase:true, required:true},
    password:{type:String,trim:true,lowercase:true, required:true},
    first_name:String,
    last_name:String
});


mongoose.model('User',User);


var Note = new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId,ref:'User'},
    related_user:{type:mongoose.Schema.ObjectId,ref:'User'},
    text:String,
    date:{type:Date, 'default':Date.now}
});

mongoose.model('Note',Note);

/**
 * Authentication using query string param
 */
var QueryStringAuthentication = jest.Authentication.extend({
    is_authenticated:function(req,callback) {
        var email = (req.query.email || '').trim().toLowerCase();
        var password = (req.query.password || '').trim().toLowerCase();
        mongoose.model('User').findOne({email:email},function(err,user) {
            req.user = user;
            callback(err,user && user.password == password);
        });
    }
});

/***
 *  Shows only entities that are related to a user,
 */
var OnlyOwnerAuthorization = jest.Authorization.extend({
    /**
     * limit a GET query before executing the DB command
     * @param req
     * express request
     * @param query
     * mongoose queryset
     * @param callback
     * function(err,query)
     */
    limit_object_list:function(req,query,callback) {
        callback(null,query.where('user',req.user._id));
    },
    // save as above except for queries by id
    limit_object:function(req,query,callback) {
        this.limit_object_list(req,query,callback);
    },


    /***
     * Edit the new/or modified object before saving it to DB.
     * Use to make sure that only authorized data is submitted
     * @param req
     * express request
     * @param object
     * mongoose object
     * @param callback
     * function(err,object)
     */
    edit_object:function(req,object,callback) {
        object.user = req.user._id;
        callback(null,object);

    }
});

/**
 * Validation for note writing
 */
var NoteValidation = jest.Validation.extend({
    is_valid:function(fields,callback) {
        var errors = {};
        if(!fields.text)
            errors['text'] = 'you must write something';
        else if(fields.length < 10)
            errors['text'] = 'text must by at least 10 characters';

        callback(null,errors);
    }
});


var NoteResource = jest.MongooseResource.extend({
    init:function() {
        this._super(mongoose.model('Note'));

        // what methods to allow
        this.allowed_methods = ['get','post','put','delete'];

        // default query ( used here to populate user object )
        this.default_query = function(query) {
            return query.populate('related_user').sort({date:-1});
        };

        // what fields to show
        this.fields = {
            id:null,
            related_user:{first_name:null, last_name:null},
            text:null,
            date:null
        };

        // what fields are editable (via post or put)
        this.update_fields = {
            related_user:null,
            text:null
        };

        this.authentication = new QueryStringAuthentication();

        this.authorization = new OnlyOwnerAuthorization();

        this.validation = new NoteValidation();

        // define which filtering is allowed
        this.filtering = {
            related_user:{
                exact:null,
                in:null
            },
            text:{
                contains:null,
                icontains:null,
                startswith:null,
                istartswith:null,
                regex:null
            }
        };

        // define which sortings are allowed
        this.sorting = {
            date:null,
            related_user:null,
            text:null
        };
    }
});

var UserResource = jest.MongooseResource.extend({
    init:function() {
        this._super(mongoose.model('User'));

        this.allowed_methods = ['get'];

        this.fields = {
            id:null,
            first_name:null,
            last_name:null
        };

        this.authentication = new QueryStringAuthentication();
    }
});

mongoose.connect('mongodb://localhost/jest_test');

var app = express();

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

// create the api

var api = new jest.Api('api/v1',app);

api.register('notes', new NoteResource());

api.register('users', new UserResource());


app.listen(3000,function(){
    console.log('app is listening on 3000');

    mongoose.model('User').update({email:'test@jest.com'},{$set:{password:'test'}},{upsert:true},function(err,count) {
        if(err)
            console.error(err);
        else
            console.log('user test@jest.com  exists with password test');
    });
});

