let wordSizes = function(sentence) {
  if (sentence === '') return {};
  let cleanSentence = sentence.replace(/[^a-z ]/ig, '');
  return cleanSentence.split(' ').reduce((obj, word) => {
    let length = word.length;
    obj[length] = obj[length] ? obj[length] + 1 : 1;
    return obj;
  }, {});
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}