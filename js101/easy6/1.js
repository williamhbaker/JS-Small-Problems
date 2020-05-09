let repeater = function(string) {
  let newStr = '';
  for (let char of string) {
    newStr = newStr + char + char;
  }
  return newStr;
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater('') === '');             // ""