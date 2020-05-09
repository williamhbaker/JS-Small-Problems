const DIGIT_WORDS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

let wordToDigit = function(sentence) {
  return sentence.replace(/\b(\w+)\b/g, (word) => {
    return Object.keys(DIGIT_WORDS).includes(word) ? DIGIT_WORDS[word] : word;
  });
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The weight is done.'));