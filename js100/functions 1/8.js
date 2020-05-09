const greetings = {
  en: 'Hi!', fr: 'Salut!', pt: 'Olá!', 
  de: 'Hallo!', sv: 'Hej!', af: 'Haai!',
}

let greet = function returnGreetingBasedOnLanguageCode(code) {
  return greetings[code];
}


console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'