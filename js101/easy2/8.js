let everyNth = function(array, nth) {
  return array.filter((_, idx) => (idx + 1) % nth === 0);
};

console.log(everyNth([2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
