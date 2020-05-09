let shortLongShort = function(...strings) {
  strings.sort((a, b) => a.length - b.length);
  return strings[0] + strings[1] + strings[0];
};


console.log(shortLongShort('abc', 'defgh') === 'abcdefghabc');    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh') === 'fghabcdefgh');    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz') === 'xyz');         // "xyz"