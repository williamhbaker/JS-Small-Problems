const GRADES_TABLE = [
  [90, 'A'],
  [80, 'B'],
  [70, 'C'],
  [60, 'D'],
  [0, 'F'],
];

let getGrade = function(...grades) {
  let average = grades.reduce((sum, grade) => sum + grade) / grades.length;

  for (let counter = 0; counter < GRADES_TABLE.length; counter += 1)  {
    if (average >= GRADES_TABLE[counter][0]) return GRADES_TABLE[counter][1];
  }
};

console.log(getGrade(90, 90, 90));    // "A"
console.log(getGrade(50, 50, 95));    // "D"