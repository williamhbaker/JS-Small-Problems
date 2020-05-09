let rotateString = function(string) {
  return string.slice(1) + string.slice(0, 1);
};

let rotateRightmostDigits = function(number, digits) {
  let string = String(number);
  let subString = string.slice(-digits);
  let rotSub = rotateString(subString);
  string = string.slice(0, string.length - digits) + rotSub;
  return Number(string);
};

console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917
