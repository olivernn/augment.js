module("some")

test("should return true if the function evaluates to true", function () {
  var a = [1,2,3],
      result,
      count = 0

  result = a.some(function () {
    count++
    return true
  })

  ok(result, "should return true if the function evaluates to true")
  equal(1, count, "should stop iterating as soon as the function returns true")
})

test("should return false if the function evaluates to false for all elements", function () {
  var a = [1,2,3],
      result,
      count = 0

  result = a.some(function () {
    count++
    return false
  })

  ok(!result, "should return false if the function evaluates to false")
  equal(3, count, "should stop iterating as soon as the function returns true")
})