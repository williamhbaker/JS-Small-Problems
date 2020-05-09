let memo;

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 2) + fibonacci(nth - 1);
    return memo[nth];
  }
}

console.time('nth - 2 first');

for (let n = 1; n <= 100000; n += 1) {
  memo = {};
  fibonacci(1000);
}


console.timeEnd('nth - 2 first');
