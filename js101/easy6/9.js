let reverseOneWord = function(word) {
  return word.split('').reverse().join('');
};

let reverseWords = function(sent) {
  return sent
    .split(' ')
    .map((word) => (word.length >= 5 ? reverseOneWord(word) : word))
    .join(' ');
};

console.log(reverseWords('Professional') === "lanoisseforP");             // "lanoisseforP"
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School') === "hcnuaL loohcS");            // "hcnuaL loohcS"