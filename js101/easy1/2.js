let readline = require('readline-Sync');

let isOdd = function(num) {
  return Math.abs(num) % 2 === 1;
};

let start = Number.parseInt(readline.question('Enter start: '));
let end = Number.parseInt(readline.question('Enter end: '));

while (start <= end) {
  if (isOdd(start)) {
    console.log(start);
  }
  start += 1;
}