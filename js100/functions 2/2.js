function greet(greeting = 'Hello', thing = 'World') {
  console.log(`${greeting}, ${thing}!`);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!