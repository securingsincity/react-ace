/**
 * @emails sema@fb.com
 */

/*jshint evil:true*/

require('mock-modules').autoMockOff();

describe('es7-spread-property-visitors', function() {
  var transformFn;

  var shortObjectsVisitors;
  var spreadPropertyVisitors;

  var visitors;

  // These are placeholder variables in scope that we can use to assert that a
  // specific variable reference was passed, rather than an object clone of it.
  var x = 123456;
  var y = 789012;
  var z = 345678;

  beforeEach(function() {
    require('mock-modules').dumpCache();
    transformFn = require('../../src/jstransform').transform;

    shortObjectsVisitors = require('../es6-object-short-notation-visitors').visitorList;
    spreadPropertyVisitors = require('../es7-spread-property-visitors').visitorList;

    visitors = spreadPropertyVisitors.concat(
      shortObjectsVisitors
    );
  });

  function transform(code) {
    return transformFn(visitors, code).code;
  }

  function expectTransform(code, result) {
    expect(transform(code)).toEqual(result);
  }

  function expectObjectAssign(code) {
    var objectAssignMock = jest.genMockFunction();
    Object.assign = objectAssignMock;
    eval(transform(code));
    return expect(objectAssignMock);
  }

  // Semantic tests.

  it('uses Object.assign with an empty new target object', function() {
    expectObjectAssign(
      'var xy = { ...x, y: 2 }'
    ).toBeCalledWith({}, x, { y: 2 });
  });

  it('coalesces consecutive properties into a single object', function() {
    expectObjectAssign(
      'var xyz = { ...x, y: 2, z }'
    ).toBeCalledWith({}, x, { y: 2, z: z });

  });

  it('avoids an unnecessary empty object when spread is not first', function() {
    expectObjectAssign(
      'var xy = { x: 1, ...y }'
    ).toBeCalledWith({ x: 1}, y);
  });

  it('passes the same value multiple times to Object.assign', function() {
    expectObjectAssign(
      'var xyz = { x: 1, y: 2, ...z, ...z }'
    ).toBeCalledWith({ x: 1, y: 2}, z, z);
  });

  it('keeps object literals as separate arguments to assign', function() {
    expectObjectAssign(
      'var xyz = { x: 1, ...({ y: 2 }), z: 3 }'
    ).toBeCalledWith({ x: 1}, { y: 2 }, {z: 3 });
  });

  it('does not call assign when there are no spread properties', function() {
    expectObjectAssign(
      'var xy = { x: 1, y: 2 }'
    ).not.toBeCalled();
  });

  // Syntax tests.

  it('should preserve extra whitespace', function() {
    expectTransform(
      'let xyz = { x: 1, y : \n 2, ... \nz,  ...  z   }',
      'let xyz = Object.assign({ x: 1, y : \n 2},  \nz,    z   )'
    );
  });

  it('should preserve parenthesis', function() {
    expectTransform(
      'let xyz = { x: 1, ...({ y: 2 }), z: 3 }',
      'let xyz = Object.assign({ x: 1}, ({ y: 2 }), {z: 3 })'
    );
  });

  // Don't transform

  it('should not transform destructuring assignment', function() {
    expectTransform(
      'let { x, ...y } = z',
      'let { x, ...y } = z'
    );
  });

  // Accessors are unsupported. We leave it unprocessed so that other,
  // chained transforms, can take over.

  it('should not transform when there are getters', function() {
    expectTransform(
      'let xy = { ...x, get x() { } }',
      'let xy = { ...x, get x() { } }'
    );
  });

  it('should not transform when there are setters', function() {
    expectTransform(
      'let xy = { set x(v) { }, ...y }',
      'let xy = { set x(v) { }, ...y }'
    );
  });

});
