let asciiValue = function(string) {
  let values = string.split('').map((letter) => letter.charCodeAt(0));
  return values.reduce((sum, next) => sum + next, 0);
};

let asciiValue = function(string) {
  let letters = string.split('');
  let sum = 0;
  for (let i = 0; i < letters.length; i += 1) {
    sum += letters[i].charCodeAt(0);
  }
  return sum;
};

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0