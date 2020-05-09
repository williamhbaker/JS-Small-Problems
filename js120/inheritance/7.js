let towMixin = {
  tow() {
    console.log("I can tow a trailer!");
  }
}

class Truck {
  constructor() {
    Object.assign(this, towMixin);
  }
}

class Car {}

let truck = new Truck();
truck.tow();