let substringsAtStart = function(string) {
  return string.split('')
    .map((_, idx, arr) => {
      return arr.slice(0, idx + 1).join('');
    });
};

let substrings = function(string) {
  let subs = [];
  string.split('').forEach((_, idx) => {
    subs = subs.concat(substringsAtStart(string.slice(idx, string.length)));
  });
  return subs;
};

console.log(substrings('abcde'));