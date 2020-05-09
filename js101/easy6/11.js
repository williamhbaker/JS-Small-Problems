let isBalanced = function(string) {
  let pattern1 = /\(.*?\)/g;
  let pattern2 = /[\(\)]/g;
  let strippedString = string.replace(pattern1, '');
  return !pattern2.test(strippedString);
};

console.log(isBalanced("((What) (is this))?"));
console.log();

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
