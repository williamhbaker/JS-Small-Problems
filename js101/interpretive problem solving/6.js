let stringBuilder = function(leadingSpaces, intSpaces) {
  return ' '.repeat(leadingSpaces) + '*'
       + ' '.repeat(intSpaces) + '*'
       + ' '.repeat(intSpaces) + '*';
};

let star = function(size) {
  let midPoint = Math.ceil(size / 2);

  for (let row = 1; row <= size; row += 1) {
    let intSpaces;
    let leadingSpaces;

    if (row === midPoint) {
      console.log('*'.repeat(size));
      continue;
    } else if (row < midPoint) {
      intSpaces = midPoint - row - 1;
      leadingSpaces = row - 1;
    } else {
      intSpaces = row - midPoint - 1;
      leadingSpaces = size - row;
    }

    console.log(stringBuilder(leadingSpaces, intSpaces));
  }

};

star(13);