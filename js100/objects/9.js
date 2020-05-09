let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let personObj = {};

for (let i = 0; i < nestedArray.length; i += 1) {
  personObj[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(personObj);