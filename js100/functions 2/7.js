/**The first human year corresponds to 15 cat years.
  *The second human year corresponds to 9 cat years.
  *Every subsequent human year corresponds to 4 cat years.
  */

const firstYear = 15;
const secondYear = 9;
const otherYears = 4;

let catAge = function(humanYears) {
  switch (humanYears) {
    case 0:   return firstYear;
    case 1:   return secondYear;
    case 2:   return firstYear + secondYear;
    default:  return firstYear + secondYear + (humanYears - 2) * otherYears;
  }
}

console.log(catAge(0));
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32