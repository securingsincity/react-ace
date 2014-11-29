var visit = require("./path-visitor").visit;
var deprecate = require("depd")('require("ast-types").traverse');

function traverseWithFullPathInfo(node, callback) {
    return visit(node, {
        visitNode: function(path) {
            if (callback.call(path, path.value) !== false) {
                this.traverse(path);
            }

            return false;
        }
    });
}

var deprecatedWrapper = deprecate.function(
    traverseWithFullPathInfo,
    'Please use require("ast-types").visit instead of .traverse for ' +
        'syntax tree manipulation'
);

deprecatedWrapper.fast = deprecatedWrapper;
module.exports = deprecatedWrapper;
