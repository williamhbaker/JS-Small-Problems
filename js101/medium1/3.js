let rotateString = function(string) {
  return string.slice(1) + string[0];
};

let maxRotation = function(number) {
  let strNum = String(number);
  for (let counter = 0; counter < strNum.length - 1; counter += 1) {
    strNum = strNum.slice(0, counter) + rotateString(strNum.slice(counter));
  }
  return Number(strNum);
};

console.log(maxRotation(735291) === 321579);          // 321579
console.log(maxRotation(3) === 3);               // 3
console.log(maxRotation(35) === 53);              // 53
console.log(maxRotation(105) === 15);             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);      // 7321609845