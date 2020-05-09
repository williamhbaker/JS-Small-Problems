let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
fido.age = 12;

// Add property 'favorite food'.
fido['favorite food'] = 'beans';

console.log(fido.age);
console.log(fido['favorite food']);