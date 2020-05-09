let myBind = function(func, obj) {
  return function(...args) {
    return func.call(obj, ...args);
  };
};