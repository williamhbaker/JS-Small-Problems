let triangle = function(number) {
  for (let i = 1; i <= number; i += 1) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
  }
};


triangle(5);
triangle(9);