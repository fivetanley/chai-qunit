!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.chaiQUnit=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var assert = window.chai.assert;
var QUnit = window.QUnit["default"] || window.QUnit;

var CHAI_FUNCTIONS = [
  "ok",
  "notOk",
  "equal",
  "notEqual",
  "strictEqual",
  "notStrictEqual",
  "deepEqual",
  "notDeepEqual",
  "isTrue",
  "isFalse",
  "isNull",
  "isNotNull",
  "isUndefined",
  "isDefined",
  "isFunction",
  "isNotFunction",
  "isObject",
  "isNotObject",
  "isArray",
  "isNotArray",
  "isString",
  "isNotString",
  "isNumber",
  "isNotNumber",
  "isBoolean",
  "isNotBoolean",
  "typeOf",
  "notTypeOf",
  "instanceOf",
  "notInstanceOf",
  "include",
  "notInclude",
  "match",
  "notMatch",
  "property",
  "notProperty",
  "deepProperty",
  "notDeepProperty",
  "propertyVal",
  "propertyNotVal",
  "deepPropertyVal",
  "deepPropertyNotVal",
  "lengthOf",
  "throw",
  "throws",
  "Throw",
  "doesNotThrow",
  "operator",
  "closeTo",
  "sameMembers",
  "includeMembers"
];

var chaiQUnit = {};

function createChaiAlias(chaiFunction){
  return function(){
    var args = [].slice.apply(arguments);
    args.unshift(chaiFunction);
    tryChaiFunction.apply(null, args);
  }
}

function tryChaiFunction(chaiFn){
  chaiFn = assert[chaiFn];
  var chaiArgs = [].slice.apply(arguments).slice(1);
  var message = chaiFn.length === chaiArgs.length ?
    chaiArgs[chaiArgs.length - 1] :
    undefined;
  try {
    chaiFn.apply(assert, chaiArgs);
    QUnit.ok(true, message);
  } catch (e) {
    QUnit.ok(false, e.message);
  }
}

function globalize(){
  var i, len;
  for (i = 0, len = CHAI_FUNCTIONS.length; i < len; i++) {
    fn = CHAI_FUNCTIONS[i];
    if (fn === "throw") continue;
    window[fn] = chaiQUnit[fn];
  }
  window.matches    = chaiQUnit.matches;
  window.notMatches = chaiQUnit.notMatches;
}

for (var i = 0, len = CHAI_FUNCTIONS.length; i < len; i++) {
  var fn = CHAI_FUNCTIONS[i];
  chaiQUnit[fn] = createChaiAlias(fn);
}

// Custom Aliases

chaiQUnit.matches = chaiQUnit.match;
chaiQUnit.notMatches = chaiQUnit.notMatch;

chaiQUnit.__createChaiAlias__ = createChaiAlias;
chaiQUnit.globalize = globalize;

// Have to manually specify for ES6 module transplier...

var ok                 = chaiQUnit.ok;
var notOk              = chaiQUnit.notOk;
var equal              = chaiQUnit.equal;
var notEqual           = chaiQUnit.notEqual;
var strictEqual        = chaiQUnit.strictEqual;
var notStrictEqual     = chaiQUnit.notStrictEqual;
var deepEqual          = chaiQUnit.deepEqual;
var notDeepEqual       = chaiQUnit.notDeepEqual;
var isTrue             = chaiQUnit.isTrue;
var isFalse            = chaiQUnit.isFalse;
var isNull             = chaiQUnit.isNull;
var isNotNull          = chaiQUnit.isNotNull;
var isUndefined        = chaiQUnit.isUndefined;
var isDefined          = chaiQUnit.isDefined;
var isFunction         = chaiQUnit.isFunction;
var isNotFunction      = chaiQUnit.isNotFunction;
var isObject           = chaiQUnit.isObject;
var isNotObject        = chaiQUnit.isNotObject;
var isArray            = chaiQUnit.isArray;
var isNotArray         = chaiQUnit.isNotArray;
var isString           = chaiQUnit.isString;
var isNotString        = chaiQUnit.isNotString;
var isNumber           = chaiQUnit.isNumber;
var isNotNumber        = chaiQUnit.isNotNumber;
var isBoolean          = chaiQUnit.isBoolean;
var isNotBoolean       = chaiQUnit.isNotBoolean;
var typeOf             = chaiQUnit.typeOf;
var notTypeOf          = chaiQUnit.notTypeOf;
var instanceOf         = chaiQUnit.instanceOf;
var notInstanceOf      = chaiQUnit.notInstanceOf;
var include            = chaiQUnit.include;
var notInclude         = chaiQUnit.notInclude;
var match              = chaiQUnit.match;
var notMatch           = chaiQUnit.notMatch;
var property           = chaiQUnit.property;
var notProperty        = chaiQUnit.notProperty;
var deepProperty       = chaiQUnit.deepProperty;
var notDeepProperty    = chaiQUnit.notDeepProperty;
var propertyVal        = chaiQUnit.propertyVal;
var propertyNotVal     = chaiQUnit.propertyNotVal;
var deepPropertyVal    = chaiQUnit.deepPropertyVal;
var deepPropertyNotVal = chaiQUnit.deepPropertyNotVal;
var lengthOf           = chaiQUnit.lengthOf;
var throws             = chaiQUnit.throws;
var Throw              = chaiQUnit.Throw;
var doesNotThrow       = chaiQUnit.doesNotThrow;
var operator           = chaiQUnit.operator;
var closeTo            = chaiQUnit.closeTo;
var sameMembers        = chaiQUnit.sameMembers;
var includeMembers     = chaiQUnit.includeMembers;
var matches            = chaiQUnit.matches;
var notMatches         = chaiQUnit.notMatches;

exports["default"] = chaiQUnit;
exports.globalize = globalize;
exports.chaiQUnit = chaiQUnit;
exports.ok = ok;
exports.notOk = notOk;
exports.equal = equal;
exports.notEqual = notEqual;
exports.strictEqual = strictEqual;
exports.notStrictEqual = notStrictEqual;
exports.deepEqual = deepEqual;
exports.notDeepEqual = notDeepEqual;
exports.isTrue = isTrue;
exports.isFalse = isFalse;
exports.isNull = isNull;
exports.isNotNull = isNotNull;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isNotFunction = isNotFunction;
exports.isObject = isObject;
exports.isNotObject = isNotObject;
exports.isArray = isArray;
exports.isNotArray = isNotArray;
exports.isString = isString;
exports.isNotString = isNotString;
exports.isNumber = isNumber;
exports.isNotNumber = isNotNumber;
exports.isBoolean = isBoolean;
exports.isNotBoolean = isNotBoolean;
exports.typeOf = typeOf;
exports.notTypeOf = notTypeOf;
exports.instanceOf = instanceOf;
exports.notInstanceOf = notInstanceOf;
exports.include = include;
exports.notInclude = notInclude;
exports.match = match;
exports.notMatch = notMatch;
exports.property = property;
exports.notProperty = notProperty;
exports.deepProperty = deepProperty;
exports.notDeepProperty = notDeepProperty;
exports.propertyVal = propertyVal;
exports.propertyNotVal = propertyNotVal;
exports.deepPropertyVal = deepPropertyVal;
exports.deepPropertyNotVal = deepPropertyNotVal;
exports.lengthOf = lengthOf;
exports.throws = throws;
exports.Throw = Throw;
exports.doesNotThrow = doesNotThrow;
exports.operator = operator;
exports.closeTo = closeTo;
exports.sameMembers = sameMembers;
exports.includeMembers = includeMembers;
exports.matches = matches;
exports.notMatches = notMatches;
},{}]},{},[1])
(1)
});