let newStack = function() {
  let stack = [];

  return {
    push(arg) {
      stack.push(arg);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach((item) => console.log(item));
    },
  };
};