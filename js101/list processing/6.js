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

let palindromes = function(string) {
  return substrings(string).filter((substring) => {
    return substring === substring.split('').reverse().join('')
      && substring.length > 1;
  });
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]