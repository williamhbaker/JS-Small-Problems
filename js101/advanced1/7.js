let binarySearch = function(array, item, indexOffset = 0) {
  let midPoint = Math.floor(array.length / 2);

  if (array[midPoint] === item) {
    return midPoint + indexOffset;
  } else if (array.length <= 1) {
    return -1;
  }

  if (array[midPoint] < item) {
    indexOffset += midPoint + 1;
    return binarySearch(array.slice(midPoint + 1), item, indexOffset);
  } else {
    return binarySearch(array.slice(0, midPoint), item, indexOffset);
  }

};

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot',
                  'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6