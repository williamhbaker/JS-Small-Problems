let myBind = function(func, context) {
  return function() {
    return func.call(context, ...arguments);
  };
};

function baseFunc(num) {
  return this.a + this.b + this.c + num;
}

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let boundFunc = myBind(baseFunc, obj);

console.log(boundFunc(10));