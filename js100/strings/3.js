let repeat = function concatStringNumTimes(num, string) {
  let outStr = '';
  for (let i = 0; i < num; i += 1) {
    outStr = outStr.concat(string);
  }
  return outStr;
}

console.log(repeat(3, 'ha')); // 'hahaha'
