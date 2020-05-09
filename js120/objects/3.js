
function objectsEqual(obj1, obj2) {
  let str1 = JSON.stringify(obj1);
  let str2 = JSON.stringify(obj2);

  return str1 === str2;
}

function objectsEqual2(obj1, obj2) {
  let obj1Keys = Object.keys(obj1).sort();
  let obj2Keys = Object.keys(obj2).sort();

  if (obj1Keys.toString() !== obj2Keys.toString()) return false;

  return obj1Keys.every((key) => obj1[key].toString() === obj2[key].toString());
}

let testObj1 = {
  a: 1,
  b: 3,
  anObject: {
    anotherObject: {
      insideKey: 75,
    }
  }
};

let testObj2 = {
  anObject: {
    anotherObject: {
      insideKey: 75,
    }
  },
  a: 1,
  b: 3,
};

console.log(JSON.stringify(testObj2));

console.log(objectsEqual(testObj1, testObj2));