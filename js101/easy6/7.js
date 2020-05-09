let sequence1 = function(length, inc) {
  return Array(length).fill().map((_, idx) => (1 + idx) * inc);
};

let sequence = function(length, inc) {
  let arr = [];
  for (let i = 1; i <= length; i += 1) {
    arr.push(i * inc);
  }

  return arr;
};

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []