let diamond = function(size) {
  let middle = Math.ceil(size / 2);
  let spaces;
  let diamonds;

  for (let idx = 1; idx <= size; idx += 1) {
    if (idx <= middle) {
      spaces = middle - idx;
    } else {
      spaces = idx - middle;
    }

    diamonds = size - (spaces * 2);
    console.log(' '.repeat(spaces) + '*'.repeat(diamonds));
  }
};

let hollowDiamond = function(size) {
  let middle = Math.ceil(size / 2);
  let spaces;
  let diamondWidth;
  let insideSpaces;

  for (let idx = 1; idx <= size; idx += 1) {
    if (idx <= middle) {
      spaces = middle - idx;
    } else {
      spaces = idx - middle;
    }

    diamondWidth = size - (spaces * 2);

    if (diamondWidth === 1) {
      console.log(' '.repeat(spaces) + '*');
    } else {
      insideSpaces = diamondWidth - 2;
      console.log(' '.repeat(spaces) + '*' + ' '.repeat(insideSpaces) + '*');
    }
  }

};

diamond(9);
hollowDiamond(9);