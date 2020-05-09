let runningTotal1 = function(array) {
  return array.slice(1).reduce((newArr, elem) => {
    return newArr.concat(elem + newArr[newArr.length - 1]);
  }, array.slice(0, 1));
};

let runningTotal2 = function(array) {
  return array.reduce((newArr, elem) => {
    if (newArr[newArr.length - 1]) {
      return newArr.concat(elem + newArr[newArr.length - 1]);
    } else {
      return newArr.concat(elem);
    }
  }, []);
};

let runningTotal = function(array) {
  return array.map((elem, idx) => {
    return array.slice(0, idx + 1).reduce((sum, elem) => sum + elem);
  });
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []