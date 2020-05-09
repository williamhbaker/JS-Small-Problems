let modulo = function(dividend, divisor) {
  return ((dividend % divisor) + divisor) % divisor;
};

let dms = function(angle) {
  angle = modulo(angle, 360);

  let degrees = Math.trunc(angle);
  let remainder = (angle % 1) * 60;
  let minutes = Math.floor(remainder);
  let seconds = (remainder % 1) * 60;

  let minStr = String(minutes).padStart(2, '0');
  let secStr = String(Math.round(seconds)).padStart(2, '0');

  return `${degrees}${String.fromCharCode(176)}${minStr}'${secStr}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 0°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"