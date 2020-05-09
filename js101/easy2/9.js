let stringToInteger = function(string) {
  let digs = string.split('').map((letter) => letter.charCodeAt(0) - 48);
  return digs.reverse().reduce((tot, dig, idx) => tot + (dig * (10 ** idx)));
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true