let walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};

class Cat {
  constructor(name) {
    this.name = name;
    Object.assign(this, walkMixin);
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());