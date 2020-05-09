let integerToString = function(num) {
  let numArr = [];

  do {
    numArr.unshift(num % 10);
    num = Math.floor(num / 10);
  } while (num > 0);

  return numArr.join('');
};

let signedIntegerToString = function(integer) {
  let absString = integerToString(Math.abs(integer));
  switch (Math.sign(integer)) {
    case 1:
      return '+' + absString;
    case -1:
      return '-' + absString;
    default:
      return '0';
  }
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");