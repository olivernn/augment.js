module("Function.prototype.bind")

test("changing the context of a function", function () {
  var x = 0
  var module = {
    x: 10,
    getX: function () {
      return this.x
    }
  }

  var fn = function () {
    return this.getX()
  }

  var boundFn = fn.bind(module)

  equal(10, boundFn(), "should return a function with context bound to the specified object")
})

test("safari has problems with using bind on native functions", function () {
  var slice = Function.prototype.call.bind(Array.prototype.slice), args

  var foo = function () {
    args = slice(arguments)
  }

  foo(1,2,3,4)
  deepEqual(args, [1,2,3,4])
})

test("calling bind on a non function", function () {
  var obj = {}
  raises(function () {
    Function.prototype.bind.call(obj)
  }, TypeError)
})

test("binds properly without a context", function () {
  var context,
      global = (function () { return this }).call(),
      obj = {}

  obj.fn = function () {
    context = this
  }.bind()

  obj.fn()

  deepEqual(context, global)
})

test("binds properly without a context, and still supplies bound arguments", function () {
  var a, context,
      obj = {},
      global = (function () { return this }).call()

  obj.fn = function () {
    a = Array.prototype.slice.call(arguments)
    context = this
  }.bind(undefined, 1,2,3)

  obj.fn(1,2,3)
  deepEqual(a, [1,2,3,1,2,3])
  deepEqual(context, global)
})

test("binds a context properly", function () {
  var obj = {},
      context = null

  obj.fn = function () {
    context = this
  }

  obj.fn.bind("foo").call()
  deepEqual(context, "foo")
})

test("binds a context and supplies bound arguments", function () {
  var obj = {},
      context = null,
      args = null

  obj.fn = function () {
    context = this
    args = Array.prototype.slice.call(arguments)
  }

  var boundFn = obj.fn.bind("foo", 1,2,3)
  boundFn(4,5,6)
  deepEqual(context, "foo")
  deepEqual(args, [1,2,3,4,5,6])
})

test("returns properly without binding a context", function () {
  var obj = {},
      global = (function () { return this }).call()

  obj.fn = function () {
    return this
  }.bind()

  var ctx = obj.fn()
  deepEqual(ctx, global)
})

test("returns properly without binding a context and still supplies bound arguments", function () {
  var ctx, args,
      obj = {},
      global = (function () { return this }).call()

  obj.fn = function () {
    ctx = this
    return Array.prototype.slice.call(arguments)
  }.bind(undefined, 1,2,3)

  args = obj.fn(4,5,6)
  deepEqual(args, [1,2,3,4,5,6])
  deepEqual(ctx, global)
})

test("returns properly while binding a context", function () {
  var ret, obj = {}, arr = []
  var fn = function () {
    Array.prototype.forEach.call(arguments, function (a) {
      this.push(a);
    }, this);
    return this;
  }

  obj.fn = fn.bind(arr)
  ret = obj.fn(1,2,3)
  deepEqual(ret, arr)
})

test("returns properly while binding a context and supplies bound arguments", function () {
  var ret, obj = {}, arr = []
  var fn = function () {
    Array.prototype.forEach.call(arguments, function (a) {
      this.push(a);
    }, this);
    return this;
  }

  obj.fn = fn.bind(arr, 1,2,3)
  ret = obj.fn(4,5,6)
  deepEqual(ret, arr)
})

test("passes the correct arguments as a constructor", function () {
  var ret, expected = {name: 'right'}, obj = {}
  obj.Fn = function (arg) {
    return arg
  }.bind({name: 'wrong'})

  ret = new obj.Fn (expected)
  deepEqual(ret, expected)
})

test("returns the return value of the bound function when called as a constructor", function () {
  var arr = [1,2,3]
  var Subject = function () {
    return arr
  }.bind(null)

  var result = new Subject
  deepEqual(result, arr)
})

test("returns the correct value if constructor returns primitive", function () {
  var foo = [1,2,3], result
  var Subject = function () {
    return foo
  }.bind(null)

  foo = [1,2,3]
  result = new Subject
  equal(result, foo)

  foo = {}
  result = new Subject
  equal(result, foo)

  foo = function () {}
  result = new Subject
  equal(result, foo)

  foo = 'foo'
  result = new Subject
  ok(result !== foo)

  foo = null
  result = new Subject
  ok(result !== foo)

  foo = true
  result = new Subject
  ok(result !== foo)

  foo = 1
  result = new Subject
  ok(result !== foo)
})
