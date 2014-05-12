define("chai-qunit",
  ["chai","qunit","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var assert = __dependency1__.assert;
    var QUnit = __dependency2__["default"] || __dependency2__;

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
      for (var i = 0, len = CHAI_FUNCTIONS.length; i < len; i++) {
        fn = CHAI_FUNCTIONS[i];
        if (fn === "throw") continue;
        window[fn] = chaiQUnit[fn];
      }
    }

    for (var i = 0, len = CHAI_FUNCTIONS.length; i < len; i++) {
      var fn = CHAI_FUNCTIONS[i];
      chaiQUnit[fn] = createChaiAlias(fn);
    }

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

    __exports__["default"] = chaiQUnit;
    __exports__.globalize = globalize;
    __exports__.chaiQUnit = chaiQUnit;
    __exports__.ok = ok;
    __exports__.notOk = notOk;
    __exports__.equal = equal;
    __exports__.notEqual = notEqual;
    __exports__.strictEqual = strictEqual;
    __exports__.notStrictEqual = notStrictEqual;
    __exports__.deepEqual = deepEqual;
    __exports__.notDeepEqual = notDeepEqual;
    __exports__.isTrue = isTrue;
    __exports__.isFalse = isFalse;
    __exports__.isNull = isNull;
    __exports__.isNotNull = isNotNull;
    __exports__.isUndefined = isUndefined;
    __exports__.isDefined = isDefined;
    __exports__.isFunction = isFunction;
    __exports__.isNotFunction = isNotFunction;
    __exports__.isObject = isObject;
    __exports__.isNotObject = isNotObject;
    __exports__.isArray = isArray;
    __exports__.isNotArray = isNotArray;
    __exports__.isString = isString;
    __exports__.isNotString = isNotString;
    __exports__.isNumber = isNumber;
    __exports__.isNotNumber = isNotNumber;
    __exports__.isBoolean = isBoolean;
    __exports__.isNotBoolean = isNotBoolean;
    __exports__.typeOf = typeOf;
    __exports__.notTypeOf = notTypeOf;
    __exports__.instanceOf = instanceOf;
    __exports__.notInstanceOf = notInstanceOf;
    __exports__.include = include;
    __exports__.notInclude = notInclude;
    __exports__.match = match;
    __exports__.notMatch = notMatch;
    __exports__.property = property;
    __exports__.notProperty = notProperty;
    __exports__.deepProperty = deepProperty;
    __exports__.notDeepProperty = notDeepProperty;
    __exports__.propertyVal = propertyVal;
    __exports__.propertyNotVal = propertyNotVal;
    __exports__.deepPropertyVal = deepPropertyVal;
    __exports__.deepPropertyNotVal = deepPropertyNotVal;
    __exports__.lengthOf = lengthOf;
    __exports__.throws = throws;
    __exports__.Throw = Throw;
    __exports__.doesNotThrow = doesNotThrow;
    __exports__.operator = operator;
    __exports__.closeTo = closeTo;
    __exports__.sameMembers = sameMembers;
    __exports__.includeMembers = includeMembers;
  });