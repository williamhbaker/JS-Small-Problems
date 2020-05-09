const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

let afterMidnight = function(time) {
  let date = new Date();
  let [hours, minutes] = time.split(":").map(num => Number(num));

  date.setHours(hours);
  date.setMinutes(minutes);

  return date.getMinutes() + (date.getHours() * MINUTES_IN_HOUR);
};

let beforeMidnight = function(time) {
  if (time === '24:00' || time === '00:00') return 0;

  return MINUTES_IN_DAY - afterMidnight(time);
};


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);