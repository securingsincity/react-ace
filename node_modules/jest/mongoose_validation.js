var _ = require("underscore"),
    Class = require('sji'),
    Validation = require('./validation');

var MongooseValidation = module.exports = Validation.extend({
    init:function (model) {
        this._super();
        this.model = model;
    },
    _get_error:function (field, error) {
        var errors = {
            required:'this field is required',
            min:'must be equal or greater than ' + field.options.min,
            max:'must be equal or lower than ' + field.options.max,
            enum:'must be one of the following ' + field.options.enum
        };

        return errors[error];
    },
    elaborate_default_errors:function (field, error) {
        return _.has(field.options, error) ? this._get_error(field, error) : error;
    },
    elaborate_mongoose_error:function (fieldname, error) {
        var field = this.model.schema.paths[fieldname];

        return _.has(field.options, error.type) ? this._get_error(field, error.type) : error;
    },
    is_valid:function (object, callback) {
        var errors = {};

        _.each(this.model.schema.paths, function (field, name, paths) {
        });

        callback(null, errors);
    }
});