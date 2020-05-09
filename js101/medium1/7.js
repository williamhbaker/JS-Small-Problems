let fibonacci = function(nth) {
  let lastFib = 0;
  let thisFib = 1;

  for (let counter = 1; counter < nth; counter += 1) {
    [lastFib, thisFib] = [thisFib, thisFib + lastFib];
  }

  return thisFib;
};


fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
console.log(fibonacci(10000));      // 6765