let myIncludes = function myIncludes(str, subStr) {
  let subLength = subStr.length;
  let endingPoint = str.length - subLength + 1;
  let subArr = [];

  for (let i = 0; i < endingPoint; i += 1) {
    subArr.push(str.slice(i, i + subLength));
  }

  for (let i = 0; i < subArr.length; i += 1) {
    if (subArr[i] === subStr) return true;
  }

  return false;
}