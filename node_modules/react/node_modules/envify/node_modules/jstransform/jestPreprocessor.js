var jstransform = require('./src/jstransform');
var arrowFuncVisitors = require('./visitors/es6-arrow-function-visitors');
var restParamVisitors = require('./visitors/es6-rest-param-visitors');

exports.process = function(sourceText, sourcePath) {
  return jstransform.transform(
    arrowFuncVisitors.visitorList
      .concat(restParamVisitors.visitorList),
    sourceText
  ).code;
};
