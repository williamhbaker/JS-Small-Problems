let fibonacci = function(nth) {
  return nth <= 2 ? 1 : fibonacci(nth - 1) + fibonacci(nth - 2);
};


fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
console.log(fibonacci(20));      // 6765