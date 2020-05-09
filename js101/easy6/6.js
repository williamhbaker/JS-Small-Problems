let swapName = function(name) {
  return name.replace(/(\w+) (\w+)/, "$2, $1");
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"