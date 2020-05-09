let readline = require('readline-sync');

const SQ_METERS_TO_SQ_FEET_FACTOR = 10.7639;

let sqMetToFt = function(sqMet) {
  return sqMet * SQ_METERS_TO_SQ_FEET_FACTOR;
};

console.log('Enter length in meters:');
let length = Number.parseFloat(readline.prompt());
console.log('Enter width in meters:');
let width = Number.parseFloat(readline.prompt());

let area = length * width;
let ftArea = sqMetToFt(area);

console.log(`Area in square meters: ${area.toFixed(2)}.`);
console.log(`Area in square feet: ${ftArea.toFixed(2)}.`);