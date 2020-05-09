let substringsAtStart = function(string) {
  let subs = [];
  for (let i = 1; i <= string.length; i += 1) {
    subs.push(string.slice(0, i));
  }
  return subs;
};

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]