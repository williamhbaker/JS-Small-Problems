let multiplicativeAverage = function(arr) {
  let multAvg = arr.reduce((prod, elem) => prod * elem) / arr.length;
  return multAvg.toFixed(3);
};


console.log(multiplicativeAverage([3, 5]) === "7.500");                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"