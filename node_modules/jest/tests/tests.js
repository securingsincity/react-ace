var api_easy = require('api-easy');

exports.tests = [];

var original_describe = api_easy.describe;
api_easy.describe = function(text)
{
    var ret = original_describe(text);
    ret.outgoing.headers['Content-Type'] = 'application/json';
    return ret;
};

exports.run = function(callback)
{
    var length = exports.tests.length;
    var i=-1;
    function iter()
    {
        i++;
        if(i == length)
            callback();
        else
        {
            exports.tests[i](iter);
        }
    }
    iter();
}

exports.test1 = function(callback)
{
    var t = api_easy.describe('mognoose-resource test1')
        .use('localhost',80)
        .discuss('when using the api')
        .path('/api/')
        .discuss(' , the user resource')
        .path('/users/')
        .discuss(' and index request before any elements exists')
        .get().expect(200,{meta:{offset:0,limit:20,total_count:0},objects:[]})
        .undiscuss() // index request
        .discuss(' and post without permissions')
        .post('',{username:"ishai",password:"1234",credits:34})
        .expect(201)
        .undiscuss() // adding a user
        .unpath()    // /users/
        .undiscuss() // user resource
        .unpath()    // api
        .undiscuss()  // using the api
        .run(callback);
};

exports.test2 = function(callback)
{
api_easy.describe('mognoose-resource test2')
    .use('localhost',80)
    .discuss('when using the api')
    .path('/api/')
    .discuss(' , the user resource')
    .path('/users/')
    .discuss(' and index request')
    .get()
    .expect(200,{meta:{offset:0,limit:20,total_count:1},objects:[{username:"ishai",credits:34}]})
    .undiscuss()
    .unpath()    // /users/
    .undiscuss() // user resource
    .unpath()    // api
    .undiscuss()  // using the api
    .run(callback);
};

exports.test3 = function(callback)
{
    api_easy.describe('mognoose-resource validation')
        .use('localhost',80)
        .discuss('when using the api again')
        .path('/api/')
        .discuss(' , the user resource')
        .path('/users/')
        .discuss(' and post without permissions')
        .post('',{username:"ishai2",password:"1234",credits:-2})
        .expect(400,{credits:'must be equal or greater than 1'})
        .undiscuss() // adding a user
        .unpath()    // /users/
        .undiscuss() // user resource
        .unpath()    // api
        .undiscuss()  // using the api
        .run(callback);
};

for(var func in exports)
{
    if(func.indexOf('test') > -1 && typeof(exports[func])=='function')
        exports.tests.push(exports[func]);
}