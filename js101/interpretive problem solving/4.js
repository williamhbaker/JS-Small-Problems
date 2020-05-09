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

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"