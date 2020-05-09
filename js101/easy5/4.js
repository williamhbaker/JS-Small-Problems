let findDupRegex = function(array) {
  let stringArray = String(array);
  let pattern = /((^|,)(\d+?),.*,\3(,|$))|((^|,)(\d+?),\7(,|$))/g;
  let matchString = stringArray.match(pattern)[0];

  if (matchString.startsWith(',')) {
    matchString = matchString.slice(1, matchString.length - 1);
  }

  return Number(matchString.split(',')[0]);
};


function count(array, element) {
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup(array) {
  return array.find(element => count(array, element) === 2);
}

// Makes an array a million elements long, [0, 1, 2, 3...999999]
let testArr = Array(1000000).fill().map((_, idx) => idx); 
testArr.push(1); // Add 1 to the end of the array...this is the duplicate.

console.time('findDup');
findDup(testArr);
console.timeEnd('findDup'); // < 10 ms

console.time('findDupRegex');
findDupRegex(testArr);
console.timeEnd('findDupRegex'); // ~500 ms

console.time('findDup');
findDup(testArr);
console.timeEnd('findDup'); // < 10 ms

console.time('findDupRegex');
findDupRegex(testArr);
console.timeEnd('findDupRegex'); // ~500 ms