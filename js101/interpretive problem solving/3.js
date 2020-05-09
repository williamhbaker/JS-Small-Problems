const BLOCKS = [
    /B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi,
    /G|T/gi, /R|E/gi, /F|S/gi, /J|W/gi, /H|U/gi,
    /V|I/gi, /L|Y/gi, /Z|M/gi
  ];

let isBlockWord = function(string) {
  return BLOCKS.every((pattern) => {
    return (string.match(pattern) || []).length < 2;
  });

};

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true