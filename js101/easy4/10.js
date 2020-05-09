let swap = function(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      let pattern = /^(\w)(.*)(\w)$/;
      return word.replace(pattern, '$3$2$1');
    })
    .join(' ');
};

console.log(swap('a'));
console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde') === "ebcdA");                          // "ebcdA"
console.log(swap('a') === "a");                              // "a"