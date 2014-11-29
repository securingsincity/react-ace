var esprima = require('esprima-fb');
var utils = require('jstransform/src/utils');

var Syntax = esprima.Syntax;

function _isFunctionNode(node) {
  return node.type === Syntax.FunctionDeclaration
         || node.type === Syntax.FunctionExpression
         || node.type === Syntax.ArrowFunctionExpression;
}

function visitClassProperty(traverse, node, path, state) {
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitClassProperty.test = function(node, path, state) {
  return node.type === Syntax.ClassProperty;
};

function visitFunctionParametricAnnotation(traverse, node, path, state) {
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitFunctionParametricAnnotation.test = function(node, path, state) {
  return node.type === Syntax.ParametricTypeAnnotation
         && path[0]
         && _isFunctionNode(path[0])
         && node === path[0].parametricType;
};

function visitFunctionReturnAnnotation(traverse, node, path, state) {
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitFunctionReturnAnnotation.test = function(node, path, state) {
  return path[0] && _isFunctionNode(path[0]) && node === path[0].returnType;
};

function visitOptionalFunctionParameterAnnotation(traverse, node, path, state) {
  path.unshift(node);
  traverse(node.id, path, state);
  path.shift();
  utils.catchup(node.id.range[1], state);
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitOptionalFunctionParameterAnnotation.test = function(node, path, state) {
  return node.type === Syntax.OptionalParameter
         && path[0]
         && _isFunctionNode(path[0]);
};

function visitTypeAnnotatedIdentifier(traverse, node, path, state) {
  traverse(node.id, path, state);
  utils.catchup(node.id.range[1], state);
  utils.catchupWhiteOut(node.range[1], state);
  return false;
}
visitTypeAnnotatedIdentifier.test = function(node, path, state) {
  return node.type === Syntax.TypeAnnotatedIdentifier;
};

exports.visitorList = [
  visitClassProperty,
  visitFunctionParametricAnnotation,
  visitFunctionReturnAnnotation,
  visitOptionalFunctionParameterAnnotation,
  visitTypeAnnotatedIdentifier
];
