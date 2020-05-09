let readline = require('readline-Sync');

let nums = [];
let numStrings = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

numStrings.forEach((str) => {
  nums.push(readline.question(`Enter the ${str} number: `));
});

let conditionMet = nums.some((elem) => elem > 25);

let message = conditionMet ? 'greater' : 'not greater';

console.log(`One of the numbers in ${nums} is ${message} than 25.`);
