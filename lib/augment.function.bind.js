// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind ) {

  Function.prototype.bind = function(obj) {

    if (typeof this !== 'function') throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable")

    var slice = Array.prototype.slice,
        args = slice.call(arguments, 1), 
        self = this, 
        nop = function () {}, 
        bound = function () {

          if (nop.prototype && this instanceof nop) {
            var result = self.apply(new nop, args.concat(slice.call(arguments)))
            return (Object(result) === result) ? result : self
          } else {
            return self.apply(obj, args.concat(slice.call(arguments)))
          };
        };

    nop.prototype = self.prototype;

    bound.prototype = new nop();

    return bound;
  };
}
