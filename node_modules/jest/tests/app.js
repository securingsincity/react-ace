var express = require('express')
    , Jest = require('../index.js')
    , app = express.createServer();

app.configure(function(){
    app.set('api', {});
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test_api_db');

// create mongoose model
var User = mongoose.model('user', new Schema({
    username: {type:String,required:true},
    email: String,
    password : {type:String,validate:[function(v) { return true},'custom validate']},
    credits:{type:Number, min:1, max:230},
    role:{type:String, 'default' :'user' ,enum:['user','admin']},
    date: {type:Date,'default':Date.now}
}));

// create api with path
var rest_api = new Jest.Api('api', app);

var UserResource = Jest.MongooseResource.extend({
    init: function(model){
        this._super(model);
        this.fields = ['username','credits'];
        this.default_query = function(query)
        {
            return query.where('credits').gte(10);
        };
        this.filtering = {'credits':0};
        this.allowed_methods = ['get','post','put'];
    }
});
// register resource to api
rest_api.register('users',new UserResource(User));

app.listen(80);

function drop_database(callback)
{
    mongoose.connection.db.executeDbCommand( {dropDatabase:1}, function(err,
                                                                        result) {

        if(err)
        {
            console.log(err);
            callback(err);
        }
        else
        {
            callback(null,result);
        }
    });
}


console.log('dropping db');
setTimeout(function() {
drop_database(function(err)
{
    console.log('dropped');
    console.log('running tests');
    require('./tests').run(function()
    {
        console.log('dropping db');
        drop_database(function(err)
            {
                console.log('done');
                process.exit(0);
            }
        );
    });
});
},3000);
