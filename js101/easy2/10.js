let stringToInteger = function(string) {
  let digs = string.split('').map((letter) => letter.charCodeAt(0) - 48);
  return digs.reverse().reduce((tot, dig, idx) => tot + (dig * (10 ** idx)));
};

let stringToSignedInteger = function(string) {
  let signPattern = /^[+-]{1,1}/;
  if (string.match(signPattern)) {
    let sign = string.match(signPattern)[0];
    let abs = stringToInteger(string.replace(sign, ''));
    return sign === '-' ? -abs : abs;
  }
  return stringToInteger(string);
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true