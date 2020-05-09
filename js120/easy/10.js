class Shelter {
  constructor(availablePets) {
    this.adoptions = {}; // {personName: [pet1, pet2..}
    this.availablePets = availablePets; // [{petObj, {petObj...}]
  }

  adopt(person, pet) {
    if (this.availablePets.includes(pet)) {
      person.adopt(pet);
      this.adoptions[person.name] = this.adoptions[person.name] || [];
      this.adoptions[person.name].push(pet);
      this.removePetFromAvailable(pet);
    } else {
      console.log("The shelter doesn't have a pet like that, sorry!");
    }
  }

  removePetFromAvailable (pet) {
    let idx = this.availablePets.indexOf(pet);
    this.availablePets.splice(idx, 1);
  }

  printNumberOfAvailablePets() {
    console.log(`The Animal shelter has ${this.availablePets.length} unadopted pets.`);
  }

  printAvailablePets() {
    console.log('The Animal Shelter has the following unadopted pets:');
    this.availablePets.forEach((pet) => {
      console.log(`a ${pet.type} named ${pet.name}`);
    });
  }

  printAdoptions() {
    Object.keys(this.adoptions).forEach((personName) => {
      console.log(`${personName} has adopted the following pets:`);

      this.adoptions[personName].forEach((petObj) => {
        console.log(`a ${petObj.type} named ${petObj.name}`);
      });

      console.log();
    });
  }
}

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  adopt(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let astra        = new Pet('dog', 'Astra');
let laddie       = new Pet('dog', 'Laddie');
let fluffy       = new Pet('cat', 'Fluffy');
let kat          = new Pet('cat', 'Kat');
let ben          = new Pet('cat', 'Ben');
let chatterbox   = new Pet('parakeet', 'Chatterbox');
let bluebell     = new Pet('parakeet', 'Bluebell');

let petsList = [
  butterscotch, pudding, darwin, kennedy, sweetie, molly, chester,
  astra, laddie, fluffy, kat, ben, chatterbox, bluebell,
];

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter(petsList);
shelter.printNumberOfAvailablePets();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();

shelter.printAvailablePets();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
shelter.printNumberOfAvailablePets();