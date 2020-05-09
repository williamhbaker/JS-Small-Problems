let union = function(arr1, arr2) {
  let newArr = [];
  arr1.concat(arr2).forEach((elem) => {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  });
  return newArr;
};

console.log(union([1, 3, 5], [3, 6, 9, 11, 12, 13, 13, 13, 13]));    // [1, 3, 5, 6, 9]