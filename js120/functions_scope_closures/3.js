function myBind(func, ctx) {
  return (...someArgs) => {
    return func.apply(ctx, someArgs);
  };
}

let myFunc = function(num1, num2, num3) {
  console.log(num1 + num2 + num3);
  console.log(this);
};

let myObj = {
  a: 343,
};

let newFunc = myBind(myFunc, myObj);
newFunc(1, 2, 3);