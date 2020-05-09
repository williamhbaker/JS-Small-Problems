let buyFruit = function(array) {
  return array.flatMap((pair) => {
    let expandedArr = [];
    for (let i = 0; i < pair[1]; i += 1) {
      expandedArr.push(pair[0]);
    }
    return expandedArr;
  });
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));