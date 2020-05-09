const greetings = {
  en: 'Hi!', fr: 'Salut!', pt: 'Olá!', 
  de: 'Hallo!', sv: 'Hej!', af: 'Haai!',
}

const enGreetings = { US: 'Hey!', GB: 'Hello!', AU: 'Howdy!', }

let greet = function returnGreetingBasedOnLanguageCode(code) {
  return greetings[code];
}

let extractLanguage = function extractLanguageFromLocale(locale) {
  return locale.split('_')[0];
}

let extractRegion = function extractRegionFromLocale(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

let localGreet = function returnLocalizedGreeting(locale) {
  let lang = extractLanguage(locale);
  if (lang === 'en') {
    let region = extractRegion(locale);
    return enGreetings[region];
  }
  return greetings[lang];
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'