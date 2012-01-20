module("keys")

test("getting the keys from an object", function () {
  var obj = {"a": 1, "b": 2},
      keys = Object.keys(obj)

  same(["a", "b"], keys, "should get all the keys from an object")
})

test("getting all the keys from an array", function () {
  var arr = [1, 2, 3],
      keys = Object.keys(arr)

  same(["0", "1", "2"], keys, "should get all the keys from an array")
})

test("only get own properties", function () {
  var obj = {"a": 1, "b": 2},
      keys = Object.keys(obj)

  for (var i=0; i < keys.length; i++) {
    ok(obj.hasOwnProperty(keys[i]))
  };
})

test("only getting enumerable properties", function () {
  var obj = {"a": 1, "b": 2},
      keys = Object.keys(obj),
      props = []

  for (prop in obj) props.push(prop)

  for (var i=0; i < keys.length; i++) {
    ok(~props.indexOf(keys[i]))
  };
})

test("throws an error when called on a non object", function () {
  raises(function () {
    Object.keys("no dice")
  }, TypeError)
})

test("watch out for the dont enum bug", function () {
  var obj = {
      constructor: function () {
        return 0
      },

      toString: function () {
        return 1
      },

      valueOf: function () {
        return 2
      },

      toLocaleString: function () {
        return 3
      },

      prototype: function () {
        return 4
      },

      isPrototypeOf: function () {
        return 5
      },

      propertyIsEnumerable: function () {
        return 6
      },

      hasOwnProperty: function () {
        return 7
      },

      length: function () {
        return 8
      },

      unique: function () {
        return 9
      }
    }

  var expected = [
    'constructor',
    'toString',
    'valueOf',
    'toLocaleString',
    'prototype',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'hasOwnProperty',
    'length',
    'unique'
  ]

  same(expected.sort(), Object.keys(obj).sort(), 'should have all the object keys from the object')
})
