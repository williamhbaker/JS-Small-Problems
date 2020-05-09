let rotate90 = function(array) {
  let newLength = array[0].length;
  let newWidth = array.length;

  let rotated = [];

  for (let rows = 0; rows < newLength; rows += 1) {
    rotated.push([]);
  }

  for (let outerIdx = 0; outerIdx < newLength; outerIdx += 1) {
    for (let innerIdx = newWidth - 1; innerIdx >= 0; innerIdx -= 1) {
      let newCol = newWidth - innerIdx - 1;
      let newRow = outerIdx;
      rotated[newRow][newCol] = array[innerIdx][outerIdx];
    }
  }

  return rotated;
};

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]