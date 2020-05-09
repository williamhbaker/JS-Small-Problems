let isPalindromicNumber = function(integer) {
  return String(integer).split('').reverse().join('') === String(integer);
};

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(050));            // true