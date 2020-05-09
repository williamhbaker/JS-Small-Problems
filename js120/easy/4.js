class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, infoString) {
    super(name, age);
    this.colors = infoString;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.colors} fur.`;
  }

}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());