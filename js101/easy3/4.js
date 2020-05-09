function findFibonacciIndexByLength(length) {
  let num1 = 1;
  let num2 = 1;
  let idx = 2;

  while (String(num2).length < length) {
    [num1, num2] = [num2, num1 + num2];
    idx += 1;
    if (num1 === num2) {
      return 'ERROR';
    }
  }

  return idx;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
