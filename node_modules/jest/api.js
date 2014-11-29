var _ = require('underscore'),
    Class = require('sji');

var Api = module.exports = Class.extend({
    init:function (path, app) {
        this.path = /^(\/+)?$/g.test(path)
            ?
            ''
            :
            _.chain([])
                .push(
                    path.replace(
                        /^(\/)?(.+[^\/])?(\/)?$/,
                        '$2'
                        )
                )
                .push('/')
                .join('')
                .value();

        this.app = app;
        //Default Settings For Api
        this.settings = {
            DEFAULT_LIMIT:20,
            MAX_LIMIT:500
        };
        //Copy From App Settings (api) Defaults
        _.extend(this.settings, this.app.settings.api);

        this.resources = [];
        this.resources_schemas = [];

        this.resources_by_name = {};

        var self = this;
        this.app.get('/' + this.path, function(req, res){
            res.json(self.resources);
        });
    },
    /**
     * Register Resource to the Api
     * @param name
     * @param resource
     */
    register:function (name, resource) {
        //Get Default Settings For Api to Resource
        var self = this;

        this.resources_by_name[name] = resource;

        resource.settings = this.settings;

        resource.path = _.chain([])
            .push(self.path)
            .push(name)
            .join('')
            .value();

        resource.schema_path = _.chain([])
            .push(self.path)
            .push('schema/')
            .push(name)
            .join('')
            .value();

        this.resources.push({
            name:name,
            url:resource.path,
            schema: resource.schema_path
        });

        var resource_schema = {
            name:name,
            url:resource.path,
            allowed_methods: resource.get_allowed_methods_tree(),
            fields:resource.show_fields(),
            update_fields:resource.show_update_fields(),
            filtering : _.map(resource.filtering || {},function(value,key)
            {
                var filtering_field = { field : key };
                if(value !== null && typeof(value) === "object") {
                    filtering_field.usages = _.map(value, function(value2, operand)
                    {
                        var operand_str = operand === 'exact' ? '' : '__' + operand;
                        return resource.path + '?' + key + operand_str + '=' + self.default_value_per_operand(operand);
                    });
                }
                else {
                    filtering_field.usages = [ resource.path + '?' + key + '=<value>',  resource.path + '?' + key + '__in=<value1>,<value2>'];
                }
                return filtering_field;
            }),
            sorting : resource.path + '?order_by=' + (resource.sorting ? _.map(resource.sorting,function(val,key)
            {
                return _.shuffle(['','-'])[0] + key;
            }).join('&') : "order_by=<field1>,-<field2>")
        };

        resource_schema.allowed_methods = _.map(resource_schema.allowed_methods,function(usage,method)
        {
            var ret_usage = null;
            var has_usage = typeof(usage) == 'object';
            switch(method)
            {
                case 'get':
                    ret_usage= {};
                    if(!has_usage || usage.details)
                        ret_usage.details = typeof(usage.details)=='object' || typeof(usage.details)=='string' ?
                            usage.details :
                            self.get_details_usage(resource_schema);
                    if(!has_usage || usage.list)
                        ret_usage.list =  typeof(usage.list)=='object' || typeof(usage.list)=='string' ?
                            usage.list :
                            self.get_list_usage(resource_schema);
                    break;
                default:
                    ret_usage = has_usage || self[method + '_usage'](resource_schema);
                    break;
            }
            return { method : method, usage:ret_usage };
        });

        if(!( 'get' in resource_schema.allowed_methods))
        {
            delete resource_schema['filtering'];
            delete resource_schema['sorting'];
        }


        this.app.get('/' + resource.schema_path,function(req,res){
            res.json(resource_schema);
        });

        this.app.get('/' + resource.path, function(req, res){
            resource.index(req, res);
        });

        this.app.get('/' + resource.path + '/:id', function(req, res){
            req._id = req.params.id;
            resource.show(req, res);
        });

        this.app.post('/' + resource.path, function(req, res){
            req._id = req.params.id;
            resource.create(req, res);
        });

        this.app.delete('/' + resource.path + '/:id', function(req, res){
            req._id = req.params.id;
            resource.destroy(req, res);
        });

        this.app.put('/' + resource.path + '/:id', function(req, res){
            req._id = req.params.id;
            resource.update(req, res);
        });

    },
    //Alias for register -Backword Compability
    register_resource:function () {
        this.register.apply(this, arguments);
    },
    get_details_usage: function(schema)
    {
        return schema.url + '/<' + schema.name + '_id>';
    },
    get_list_usage : function(schema)
    {
        return _.chain(schema.filtering).map(function(field)
        {
            return field.usages;
        }).flatten().push(schema.url).push(schema.sorting).value();
    },
    put_usage : function(schema)
    {
        return {
            url : schema.url + '/<' + schema.name + '_id>',
            body: this.put_post_body(schema)
        };
    },
    delete_usage: function(schema)
    {
        return {
            url : schema.url + '/<' + schema.name + '_id>'
        };
    },
    post_usage : function(schema)
    {
        return {
            url : schema.url,
            body : this.put_post_body(schema)
        }
    },
    put_post_body: function(schema)
    {
        var body = {};
        var field_names = _.keys(schema.update_fields);
        var num_of_fields = Math.min(3,field_names.length);
        for(var i=0; i<num_of_fields; i++){
            body[field_names[i]] = '<some value>';
        }
        return body;
    },
    default_value_per_operand: function(operand)
    {
        switch(operand){
            case 'in':
                return '<value1>,<value2,<value3>';
            case 'near':
                return '<lat>,<lng>';
            case 'or':
                return '<field1__operand1>,<field2__operand2>&<field1__operand1>=<value1>&<field2__operand2>=<value2>';
            default:
                return '<value>';
        }
    }
});

