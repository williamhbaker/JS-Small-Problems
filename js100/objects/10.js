function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
console.log(clonedPerson);