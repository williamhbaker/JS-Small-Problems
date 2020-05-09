let multisum = function(num) {
  let nums = Array(num).fill().map((_, idx) => idx + 1);
  let filtered = nums.filter((val) => val % 3 === 0 || val % 5 === 0);
  return filtered.reduce((sum, cur) => sum + cur);
};

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(20));    // 98