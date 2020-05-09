let digitList = function(integer) {
  return String(integer).split('').map((char) => Number(char));
};

let digitList2 = function(integer) {
  let arr = [];
  do {
    arr.push(integer % 10);
    integer = Math.floor(integer / 10);
  } while (integer > 0);
  return arr.reverse();
};

function digitList3(number) {
  let results = [];
  while (number > 0) {
    results.unshift(number % 10);
    number = Math.floor(number / 10);
  }
  return results;
}

console.log(digitList3(12345));       // [1, 2, 3, 4, 5]
console.log(digitList3(7));           // [7]
console.log(digitList3(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList3(444));         // [4, 4, 4]