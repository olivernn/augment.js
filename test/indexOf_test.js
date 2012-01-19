module("indexOf")

test("when the element can be found", function () {
  var a = [1,2,3],
      index

  index = a.indexOf(2)

  equal(1, index, "should return the index when the item exists in the array")
})

test("when the element cannot be found", function () {
  var a = [1,2,3],
      index

  index = a.indexOf("foo")

  equal(-1, index, "should return -1 when the item is not present in the array")
})

test("setting where to search from in the array", function () {
  var a = [1,2,3],
      index

  index = a.indexOf(2, 1)
  equal(1, index, "should return the index when the item exists in the array")

  index = a.indexOf(2, 2)
  equal(-1, index, "should return -1 when the item is not present in the array")

  index = a.indexOf(2, 10)
  equal(-1, index, "should return -1 when starting searching beyond the array's bounds")
})

test("negative search index", function () {
  var a = [1,2,3], index

  index = a.indexOf(3, -4)
  equal(2, index)

  index = a.indexOf(1, -1)
  equal(-1, index)
})
