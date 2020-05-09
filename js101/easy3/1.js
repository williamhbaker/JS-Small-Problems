let crunch = function(str) {
  return str.split('').reduce((newStr, char) => {
    return newStr.endsWith(char) ? newStr : newStr + char;
  }, '');
};

let crunch1 = function(str) {
  let pattern = /(.)\1+/g;
  return str.replace(pattern, '$1');
};

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""