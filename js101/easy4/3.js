let readline = require('readline-Sync');

let isValidNum = function(string) {
  return Number.isInteger(Number(string)) && string !== '';
};

let getCurrentAge = function() {
  let input = readline.question('What is your age? ');
  while (!isValidNum(input)) {
    console.log('Invalid input! Enter an integer.');
    input = readline.question('What is your age? ');
  }
  return input;
};

let getRetirementAge = function() {
  let input = readline.question('At what age would you like to retire? ');
  while (!isValidNum(input)) {
    console.log('Invalid input! Enter an integer.');
    input = readline.question('What is your age? ');
  }
  return input;
};

let displayResults = function(curAge, retAge) {
  let now = new Date();
  let currentYear = now.getFullYear();
  let yearsToGo = retAge - curAge;
  let retirementYear = currentYear + yearsToGo;
  console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
  console.log(`You have only ${yearsToGo} years of work to go!`);
};

let currentAge = Number(getCurrentAge());
let retirementAge = Number(getRetirementAge());
displayResults(currentAge, retirementAge);