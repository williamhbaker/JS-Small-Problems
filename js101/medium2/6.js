let sumSquareDifference = function(integer) {
  let numbers = Array(integer).fill().map((_, idx) => idx + 1);
  let sumSquared = numbers.reduce((sum, elem) => sum + elem) ** 2;
  let sumOfSquares = numbers.reduce((sum, elem) => sum + (elem ** 2), 0);
  return sumSquared - sumOfSquares;
};

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150