let isRealPalindrome = function(string) {
  let cleanString = string.replace(/[^a-z0-9]/gi, '');
  return cleanString.split('').reverse().join('').toLowerCase() === cleanString.toLowerCase();
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false