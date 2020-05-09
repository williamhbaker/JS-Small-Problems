let doubleConsonants = function(str) {
  let pattern = /((?![aeiou])[a-z])/gi;
  return str.replace(pattern, '$1$1');
};

console.log(doubleConsonants('String') === "SSttrrinngg");          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");        // "JJullyy 4tthh"
console.log(doubleConsonants('') === "");                // ""