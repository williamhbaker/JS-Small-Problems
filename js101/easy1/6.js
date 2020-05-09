let readline = require('readline-Sync');

const OPERATIONS = {
  s: ((accum, val) => accum + val),
  p: ((accum, val) => accum * val),
};

const OP_DESCRIPTIONS = {
  s: 'sum',
  p: 'product',
};

let isValidInt = function(str) {
  return Number.isInteger(Number(str)) && Number(str) > 0;
};

let isValidChoice = function(str) {
  return /^[sp]$/i.test(str);
};

let getNumberInput = function() {
  console.log('Please enter an integer greater than 0.');
  let input = readline.prompt();
  while (!isValidInt(input)) {
    console.log('Invalid input!');
    console.log('Please enter an integer greater than 0.');
    input = console.prompt();
  }
  return parseInt(input, 10);
};

let getOperationInput = function() {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  let input = readline.prompt();
  while (!isValidChoice(input)) {
    console.log('Invalid choice!');
    console.log('Enter "s" to compute the sum, or "p" to compute the product.');
    input = readline.prompt();
  }
  return input;
};

let createNumArry = function(end) {
  let output = [];
  for (let i = 1; i <= end; i += 1) {
    output.push(i);
  }
  return output;
};

let calcResult = function(number, operation) {
  let nums = createNumArry(number);
  return nums.reduce(OPERATIONS[operation]);
};

let integer = getNumberInput();
let operation = getOperationInput();
let result = calcResult(integer, operation);

console.log(`The ${OP_DESCRIPTIONS[operation]} of the integers between 1 and ${integer} is ${result}.`);
