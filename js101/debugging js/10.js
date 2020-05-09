function neutralize(sentence) {
  let words = sentence.split(" ");

  words = words.filter(isNotNegative);

  return words.join(" ");
};

function isNotNegative(word) {
  return !["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.