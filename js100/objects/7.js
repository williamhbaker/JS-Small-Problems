let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let props = [];

for (prop in vehicle) {
  props.push(prop);
}

console.log(props);