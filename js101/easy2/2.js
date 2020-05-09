let readline = require('readline-Sync');

let name = readline.question('What is your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
