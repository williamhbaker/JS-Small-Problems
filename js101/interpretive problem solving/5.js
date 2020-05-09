let caesarEncrypt = function(string, key) {
  let codedLetters = string.split('').map((char) => {
    let capSpecificStart;

    if (char.match(/[A-Z]/)) {
      capSpecificStart = 65;
    } else if (char.match(/[a-z]/)) {
      capSpecificStart = 97;
    } else {
      return char;
    }

    let offset = char.charCodeAt(0) - capSpecificStart;
    let newOffset = (offset + key) % 26;
    return String.fromCharCode(newOffset + capSpecificStart);
  });

  return codedLetters.join('');
};

let vCiph = function(string, key) {
  let caesarKeys = [...key.toLowerCase()].map((char) => char.charCodeAt(0) - 97);
  return string
    .split('')
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        caesarKeys.push(caesarKeys.shift());
        return caesarEncrypt(char, caesarKeys[caesarKeys.length - 1]);
      }

      return char;
    })
    .join('');
};

console.log(vCiph("Pineapples don't go on pizzas!", 'cab') === "Riogaqrlfu dpp't hq oo riabat!");