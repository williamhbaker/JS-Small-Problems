let transposeInPlace = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
    }
  }
};

let transpose = function(array) {
  let finalLength = array[0].length;
  let finalWidth = array.length;

  let squareLength =  array.length > array[0].length ?
                      array.length :
                      array[0].length;

  while (array.length < squareLength) {
    array.push([]);
  }

  array.forEach((row) => {
    while (row.length < squareLength) {
      row.push(NaN);
    }
  });

  transposeInPlace(array);

  array.length = finalLength;

  array.forEach((row) => {
    row.length = finalWidth;
  });
};

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

console.log(matrix);
transpose(matrix);
console.log(matrix);