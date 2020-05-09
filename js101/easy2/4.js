

let multiply = (num1, num2) => num1 * num2;

let square = (num) => multiply(num, num);

let power = function(num, exp) {
  return Array(exp).fill(num).reduce(multiply);
};

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(power(5,4));