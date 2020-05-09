let capitalize = function capitalizeFirstLetters(str) {
  strArr = str.split(' ');
  strArr.forEach((word, idx) => {
    strArr[idx] = word[0].toUpperCase() + word.slice(1);
  });
  return strArr.join(' ');
}

let capString = capitalize('Launch School Tech & Talk');

console.log(capString);