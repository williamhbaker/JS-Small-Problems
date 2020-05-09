let transposeInPlace = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
    }
  }
};

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

console.log(matrix);
transposeInPlace(matrix);
console.log(matrix);