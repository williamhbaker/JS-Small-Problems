let wordSizes = function(sentence) {
  if (sentence === '') return {};
  return sentence.split(' ').reduce((obj, word) => {
    let length = word.length;
    obj[length] = obj[length] ? obj[length] + 1 : 1;
    return obj;
  }, {});
};

/*
let wordSizes1 = function(sentence) {
  let obj = {};
  if (sentence === '') return obj;
  sentence.split(' ').forEach((word) => {
    let length = word.length;
    obj[length] = obj[length] ? obj[length] + 1 : 1;
  });
  return obj;
};
*/

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}