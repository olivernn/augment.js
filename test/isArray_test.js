module("isArray")

test("things that are arrays", function () {
  var empty = [];
  var fastSmall = [1];
  var slow = [];
  slow.slow = 0;
  var slowSmall = [];
  slowSmall[999999] = 0;
  slowSmall.length = 0;
  var all = [empty, fastSmall, slow, slowSmall];

  all.forEach(function(a) {
    ok(Array.isArray(a), "things that are arrays should return true")
  });
})

test("things that are not arrays", function () {
  var all = [null, {}, undefined, 17, "Array", Math.PI, true, false]

  all.forEach(function (a) {
    ok(!Array.isArray(a), "things that are not arrays should not return true")
  })
})