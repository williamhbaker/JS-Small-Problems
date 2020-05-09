let cleanUp = function(string) {
  let pattern = /[^a-z]+/gi;
  return string.replace(pattern, ' ');
};

console.log(cleanUp("---what'''''''s my +*& line?") === " what s my line ");    // " what s my line "