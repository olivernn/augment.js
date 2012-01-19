module("lastIndexOf")

test("when the element can be found", function () {
  var a = [1,2,3],
      index

  index = a.lastIndexOf(2)

  equal(1, index, "should return the index when the item exists in the array")
})

test("when the element cannot be found", function () {
  var a = [1,2,3],
      index

  index = a.lastIndexOf("foo")

  equal(-1, index, "should return -1 when the item is not present in the array")
})

test("setting where to search from in the array", function () {
  var a = [1,2,3],
      index

  index = a.lastIndexOf(2, 3)
  equal(1, index, "should return the index when the item exists in the array")

  index = a.lastIndexOf(3, 1)
  equal(-1, index, "should return -1 when the item is not present in the array")

  index = a.lastIndexOf(2, 0)
  equal(-1, index, "should return -1 when starting searching beyond the array's bounds")
})

test("should search from the rear", function () {
  var a = [1,2,2],
      result

  result = a.lastIndexOf(2, 2)

  equal(2, result, "should start searching from the rear of the array")
})
