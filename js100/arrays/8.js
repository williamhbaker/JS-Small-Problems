function filter(input) {
  return Array.isArray(input);
}

console.log(filter(5));
console.log(filter([1]));
console.log(filter([]));