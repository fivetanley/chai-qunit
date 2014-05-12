(function(){

  module("chaiQUnit");

  chaiQUnit.globalize();

  test("ok", function(){
    ok(true);
  });

  test("notOk", function(){
    notOk(false);
  });

  test("match", function(){
    match("Hello", /hello/i);
  });

  test("strictEqual", function(){
    strictEqual(false, false);
  });

  test("notStrictEqual", function(){
    notStrictEqual(0, "0");
  });

  test("notMatch", function(){
    notMatch("Hello", /goodbye/);
  });

  test("equal", function(){
    equal("foo", "foo");
  });

  test("deepEqual", function(){
    deepEqual({foo: "bar"}, {foo: "bar"});
  });

  test("notDeepEqual", function(){
    notDeepEqual({foo: "bar"}, {foo: "baz"});
  });

  test("isTrue", function(){
    isTrue(true);
  });

  test("isFalse", function(){
    isFalse(false);
  });

  test("isNull", function(){
    isNull(null);
  });

  test("isNotNull", function(){
    isNotNull(undefined);
  });

  test("isUndefined", function(){
    isUndefined(undefined);
  });

  test("isFunction", function(){
    isFunction(function(){});
  });

  test("isNotFunction", function(){
    isNotFunction(true);
  });

  test("isObject", function(){
    isObject({});
  });

  test("isNotObject", function(){
    isNotObject(null);
  });

  test("isArray", function(){
    isArray([]);
  });

  test("isNotArray", function(){
    isNotArray("hi");
  });

  test("isString", function(){
    isString("hi");
  });

  test("isNotString", function(){
    isNotString(null);
  });

  test("isNumber", function(){
    isNumber(1);
  });

  test("isNotNumber", function(){
    isNotNumber("ohi");
  });

  test("isBoolean", function(){
    isBoolean(false);
  });

  test("isNotBoolean", function(){
    isNotBoolean("Tom");
  });

  test("typeOf", function(){
    typeOf("", "string");
  });

  test("notTypeOf", function(){
    notTypeOf("hi", "number");
  });

  test("instanceOf", function(){
    instanceOf(new String(), String);
  });

  test("notInstanceOf", function(){
    notInstanceOf(new String(), Number);
  });

  test("include", function(){
    include([1, 2, 3], 1);
  });

  test("notInclude", function(){
    notInclude([1, 2, 3], "1");
  });

  test("match", function(){
    match("ohi", /Ohi/i);
  });

  test("notMatch", function(){
    notMatch("ohi", /Ohi/);
  });

  test("property", function(){
    property({foo: "bar"}, "foo");
  });

  test("notProperty", function(){
    notProperty({foo: "bar"}, "plantains");
  });

  test("deepProperty", function(){
    deepProperty({foo: { bar: "baz" } }, "foo.bar");
  });

  test("notDeepProperty", function(){
    notDeepProperty({foo: { bar: "baz" } }, "foo.zing");
  });

  test("propertyVal", function(){
    propertyVal({tea: "is good"}, "tea", "is good");
  });

  test("propertyNotVal", function(){
    propertyNotVal({tea: "is good"}, "tea", "is bad");
  });

  test("deepPropertyVal", function(){
    deepPropertyVal({foo: { bar: "baz" } }, "foo.bar", "baz");
  });

  test("deepPropertyNotVal", function(){
    deepPropertyNotVal({foo: { bar: "baz" } }, "foo.bar", "tweeeeeet");
  });

  test("lengthOf", function(){
    lengthOf("ohi", 3);
  });

  test("throws", function(){
    throws(function(){
      throw new Error("ohi");
    }, /ohi/);
  });

  test("Throw", function(){
    Throw(function(){
      throw new Error("ohi");
    }, /ohi/);
  });

  test("doesNotThrow", function(){
    doesNotThrow(function(){});
  });

  test("operator", function(){
    operator(1, '<', 2);
  });

  test("closeTo", function(){
    closeTo(1.5, 1, 0.5);
  });

  test("sameMembers", function(){
    sameMembers([1, 2, 3], [1, 2, 3]);
  });

  test("includeMembers", function(){
    includeMembers([1, 2, 3], [1, 2]);
  });

})();
