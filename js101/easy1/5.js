let readline = require('readline-Sync');

let calcTip = function(total, perc) {
  return total * (perc / 100);
};

let calcTotal = function(base, extra) {
  return base + extra;
};

console.log('What is the bill?');
let bill = Number(readline.prompt());

console.log('What is the tip percentage?');
let percentage = Number(readline.prompt());

let tip = calcTip(bill, percentage);
let total = calcTotal(bill, tip);

console.log();
console.log(`The tip is ${tip.toFixed(2)}.`);
console.log(`The total is ${total.toFixed(2)}.`);