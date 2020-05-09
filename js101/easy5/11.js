const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;
const MINUTES_IN_WEEK = DAYS_IN_WEEK * MINUTES_IN_DAY;

let modulo = function(dividend, divisor) {
  return ((dividend % divisor) + divisor) % divisor;
};

let dayOfWeekName = function(minutes) {
  let date = new Date('12/8/2019');
  date.setMinutes(minutes);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

let timeOfDay = function(minutes) {
  let totalMinutes = modulo(minutes, MINUTES_IN_WEEK);

  let dayName = dayOfWeekName(totalMinutes);

  let residDayMinutes = totalMinutes % MINUTES_IN_DAY;
  let hours = Math.floor(residDayMinutes / MINUTES_IN_HOUR);
  let residMinutes = residDayMinutes % MINUTES_IN_HOUR;

  return `${dayName} ${String(hours).padStart(2, '0')}:${String(residMinutes).padStart(2, '0')}`;
};

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));