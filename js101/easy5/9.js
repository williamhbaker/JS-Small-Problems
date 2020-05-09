let countOccurrences = function(array) {
  let lowerArray = array.map((str) => str.toLowerCase());
  let counts = lowerArray.reduce((obj, elem) => {
    obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
    return obj;
  }, {});

  Object.keys(counts).forEach((key) => {
    let qty = counts[key];
    let item = array.find((elem) => elem.toLowerCase() === key);
    console.log(`${item} => ${qty}`);
  });
};

let vehicles = ['cAr', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

/*
// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/