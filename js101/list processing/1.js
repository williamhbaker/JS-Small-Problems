let sum = function(integer) {
  let digArr = [];
  do {
    digArr.push(integer % 10);
    integer = Math.floor(integer / 10);
  } while (integer > 0);
  return digArr.reduce((sum, num) => sum + num);
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45