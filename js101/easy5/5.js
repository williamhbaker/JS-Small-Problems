let interleave = function(arr1, arr2) {
  return arr1.flatMap((elem, idx) => [elem, arr2[idx]]);
};

console.log(
  interleave([1, 2, 3], ['a', 'b', 'c'])
);    // [1, "a", 2, "b", 3, "c"]