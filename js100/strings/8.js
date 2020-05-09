let isBlank = function isBlank(str) {
  return !(/[^ ]/).test(str);
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true