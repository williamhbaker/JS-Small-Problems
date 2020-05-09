class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');
kitty.greet();