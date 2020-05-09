let validCheck = function(arr) {
  if (arr.some((length) => length <= 0)) return false;

  let twoSmallest = arr.slice(0, 2).reduce((sum, len) => sum + len);
  if (twoSmallest <= arr[2]) return false;

  return true;
};

let triangle = function(...lengths) {
  let sortedSides = lengths.sort((a, b) => a - b);
  if (!validCheck(sortedSides)) return 'invalid';

  if (sortedSides[0] === sortedSides[2]) {
    return 'equilateral';
  } else if (sortedSides[0] === sortedSides[1] || sortedSides[1] === sortedSides[2]) {
    return 'isosceles';
  }

  return 'scalene';
};

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"