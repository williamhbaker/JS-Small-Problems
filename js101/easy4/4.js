let isRealPalindrome = function(string) {
  let cleanString = string.replace(/[^a-z0-9]/gi, '');
  return cleanString.split('').reverse().join('').toLowerCase() === cleanString.toLowerCase();
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // false (case matters)
console.log(isRealPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isRealPalindrome('356653'));              // true