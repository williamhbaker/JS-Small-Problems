let fridayThe13ths = function(year) {
  let months = [];
  for (let monthIdx = 0; monthIdx < 12; monthIdx += 1) {
    months.push(new Date(year, monthIdx, 13));
  }

  return months.reduce((sum, date) => (date.getDay() === 5 ? sum + 1 : sum), 0);
};

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2