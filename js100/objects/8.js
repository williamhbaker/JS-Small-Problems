let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let personArr = [];

for (prop in person) {
  personArr = personArr.concat([prop, person[prop]]);
}

console.log(personArr);