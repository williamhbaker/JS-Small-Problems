let letterPercentages = function(string) {
  let percentages = {};

  let lowerMatches = string.match(/[a-z]/g) || [];
  let upperMatches = string.match(/[A-Z]/g) || [];

  let lowerCount = lowerMatches.length;
  let upperCount = upperMatches.length;
  let neithers = string.length - lowerCount - upperCount;

  percentages.lowercase = ((lowerCount / string.length) * 100).toFixed(2);
  percentages.uppercase = ((upperCount / string.length) * 100).toFixed(2);
  percentages.neither = ((neithers / string.length) * 100).toFixed(2);

  return percentages;
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }