module("keys")

test("getting the keys from an object", function () {
  var obj = {"a": 1, "b": 2}
  var keys = Object.keys(obj)

  same(["a", "b"], keys, "should get all the keys from an object")
})

test("getting all the keys from an array", function () {
  var arr = [1, 2, 3]
  var keys = Object.keys(arr)

  same(["0", "1", "2"], keys, "should get all the keys from an array")
})