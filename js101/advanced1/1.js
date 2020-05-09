let MADLIBS = {
  ADJECTIVE: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  NOUN: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  VERB: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  ADVERB: ['easily', 'lazily', 'noisily', 'excitedly'],
};

let madlibs = function(templateStr) {
  let pattern = /(#\w+)/g;
  let output = templateStr.replace(pattern, (match) => {
    let key = match.slice(1);
    return MADLIBS[key][Math.floor(Math.random() * MADLIBS[key].length)];
  });
  console.log(output);
};

let template1 =
  'The #ADJECTIVE brown #NOUN #ADVERB ' +
  '#VERB the #ADJECTIVE yellow ' +
  '#NOUN, who #ADJECTIVE #VERB his ' +
  '#NOUN and looks around.';

madlibs(template1);