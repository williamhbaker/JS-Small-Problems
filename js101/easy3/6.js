let readline = require('readline-Sync');

let noun = readline.question('Enter a noun: ');

console.log(`This is how you do string interpolation: ${noun} was the noun you entered.`);