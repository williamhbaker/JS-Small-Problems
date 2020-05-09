let Fraction = require('fraction.js');

let findDuplicate = function(fractionsArray) {
  for (let idx = 0; idx < fractionsArray.length; idx += 1) {
    let foundDup = fractionsArray.slice(idx + 1).some((elem) =>
      elem.d === fractionsArray[idx].d
    );

    if (foundDup) return idx;
  }

  return -1;
};

let splitOne = function(fractionsArray, idx) {
  let copyFractions = fractionsArray.slice();
  let splitFraction = copyFractions.splice(idx, 1).flatMap((elem) =>
    [
      Fraction(1, (elem.d + 1)),
      Fraction(1, elem.d * (elem.d + 1)),
    ]
  );

  return copyFractions.concat(splitFraction).sort((a, b) => a.d - b.d);
};

let greedyComplete = function(numbers) {
  return numbers.every((elem) => elem.n === 1);
};

let difference = function(fraction, fractionsArray) {
  return fractionsArray.reduce((diff, elem) => diff.sub(elem), fraction);
};

let greedySplit = function(numObj) {
  let fractions = [numObj];

  while (!greedyComplete(fractions)) {
    let lastItem = fractions.pop();
    let numerator = lastItem.n;
    let denominator = lastItem.d;

    fractions.push(Fraction(1, Math.ceil(denominator / numerator)));
    fractions.push(difference(numObj, fractions));
  }

  return fractions;
};

let egyptian = function(numObj) {
 let fractions = greedySplit(numObj);

 while (true) {
  let duplicateIndex = findDuplicate(fractions);
  if (duplicateIndex === -1) break;

  fractions = splitOne(fractions, duplicateIndex);
 }

 return fractions.map((elem) => elem.d);
};

let unegyptian = function(denoms) {
  let fractions = denoms.map((denom) => Fraction(1, denom));
  let fracSum = fractions.reduce((sum, frac) => sum.add(frac));
  return fracSum.n / fracSum.d;
};

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3