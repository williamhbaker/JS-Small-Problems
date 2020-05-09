let readline = require('readline-Sync');

const OPERATIONS = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
  '%': (num1, num2) => num1 % num2,
  '**': (num1, num2) => num1 ** num2,
};

let firstNum = Number(readline.question("Enter the first number: "));
let secondNum = Number(readline.question("Enter the second number: "));

Object.keys(OPERATIONS).forEach((operator) => {
  let result = OPERATIONS[operator](firstNum, secondNum);
  console.log(`${firstNum} ${operator} ${secondNum} = ${Math.round(result)}`);
});