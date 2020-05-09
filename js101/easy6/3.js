let centerOf = function(string) {
  let len = string.length;
  if (string.length % 2 === 0) {
    return string.slice((len / 2) - 1, (len / 2) + 1);
  }
  return string[Math.floor(len / 2)];

};

console.log(centerOf('I Love Ruby') === "e");      // "e"
console.log(centerOf('Launch School') === " ");    // " "
console.log(centerOf('Launch') === "un");           // "un"
console.log(centerOf('Launchschool') === "hs");     // "hs"
console.log(centerOf('x') === "x");                // "x"