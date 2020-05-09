let hasRepeatingDigits = function(int) {
  return /(\d).*\1/.test(String(int));
};

let featured1 = function(int) {
  if (int >= 9876543201) {
    return 'There is no possible number that fulfills those requirements.';
  }

  do {
    int += 1;
  } while (int % 7 !== 0 || int % 2 === 0);

  while (hasRepeatingDigits(int)) {
    int += 14;
  }

  return int;
};

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}

console.time('mine');
console.log(featured1(999999987));
console.timeEnd('mine');


console.time('soln');
console.log(featured(999999987));
console.timeEnd('soln');
