function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

let greet = function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

greet();