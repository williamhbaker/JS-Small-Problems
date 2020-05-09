let stringy = function(int) {
  return Array(int).fill().map((_, idx) => (idx + 1) % 2).join('');
};

console.log(stringy(6) === "101010");    // "101010"
console.log(stringy(9) === "101010101");    // "101010101"
console.log(stringy(4) === "1010");    // "1010"
console.log(stringy(7) === "1010101");    // "1010101"