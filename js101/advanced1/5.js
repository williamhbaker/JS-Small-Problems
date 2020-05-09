let merge = function(arr1, arr2) {
  let longArr = arr1.length >= arr2.length ? arr1 : arr2;
  let shortArr = arr1.length < arr2.length ? arr1 : arr2;

  let mergedArr = []
  let shortCounter = 0;

  longArr.forEach((thisElem) => {
    while (true) {
      if (shortArr[shortCounter] < thisElem) {
        mergedArr.push(shortArr[shortCounter]);
        shortCounter += 1;
        continue;
      }
      break;
    }
    mergedArr.push(thisElem);
  });

  if (shortArr[shortCounter]) {
    mergedArr = mergedArr.concat(shortArr.slice(shortCounter));
  }

  return mergedArr;
};

console.log(merge([3, 4], [1, 2]));      // [1, 2, 3, 4]
//console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
//console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
//console.log(merge([1, 4, 5], []));             // [1, 4, 5]