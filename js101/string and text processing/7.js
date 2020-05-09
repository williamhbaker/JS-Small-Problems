let staggeredCase = function(string) {
  let counter = 0;
  return string
    .split('')
    .map((char) => {
      let newLetter = counter % 2 === 0 ?
        char.toUpperCase() :
        char.toLowerCase();

      if (/[a-z]/i.test(char)) {
        counter += 1;
      }

      return newLetter;
    })
    .join('');
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);