function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

let nester = function(array) {
  let ind = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, ind);
  let secondHalf = array.slice(ind);

  if (firstHalf.length === 1) {
    return [firstHalf, secondHalf];
  }

  return [nester(firstHalf), nester(secondHalf)];
};

let mergeSort = function(array) {
  let nestedArray = nester(array);

  let mergeSorter = function(nestedArray) {
    if (nestedArray[0].length === 1) {
      return merge(nestedArray[0], nestedArray[1]);
    }

    return merge(mergeSorter(nestedArray[0]), mergeSorter(nestedArray[1]));
  };

  return mergeSorter(nestedArray);
};

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51,
  22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]