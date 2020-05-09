let myBind = function(func, context, ...args) {
  return function() {
    return func.call(context, ...args, ...arguments);
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
console.log(boundFunc(10)); // => 16


function addNums(num1, num2) {
  return num1 + num2;
}

let addToSeven = myBind(addNums, null, 7);
console.log(addToSeven(10)); // => 17