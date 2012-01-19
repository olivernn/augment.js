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
