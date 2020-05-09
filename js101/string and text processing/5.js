let swapCase = function(string) {
  return string
    .split('')
    .map((letter) => {
      if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
      }
      return letter.toUpperCase();
    })
    .join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"