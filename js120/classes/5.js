class Cat {
  constructor(name) {
    this.name = name;
    this.sayName();
  }

  sayName() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');