let newStack = function() {
  let stack = [];

  return {
    push(item) {
      stack.push(item);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach((item) => console.log(item));
    },
  };
};

let myStack = newStack();