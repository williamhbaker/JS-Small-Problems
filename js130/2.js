let myBind = function(func, obj, ...initialArgs) {
  return function(...args) {
    return func.call(obj, ...initialArgs, ...args);
  };
};

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10) === 15); // 15