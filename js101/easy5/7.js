let multiplyList = function(arr1, arr2) {
  return arr1.map((elem, idx) => elem * arr2[idx]);
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]