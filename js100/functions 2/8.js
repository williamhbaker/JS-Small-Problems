let removeLastChar = function(str) {
  return str.slice(0, str.length - 1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'