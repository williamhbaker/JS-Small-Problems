let reverseSentence = function(string) {
  let reversed = '';
  for (let char of string) {
    reversed = char + reversed;
  }

  return reversed;
};

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"