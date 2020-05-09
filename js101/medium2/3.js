/**
 * First make sure its valid: Sum it up and if its not 180 return invalid
 * Its right triangle if one of the angles is 90
 * Its obtuse if one angle is more than 90
 * Otherwise its acute
 */

let triangle = function(...angles) {
  let angleSum = angles.reduce((sum, ang) => sum + ang);
  if (angleSum !== 180 || angles.some((angle) => angle <= 0)) return 'invalid';

  if (angles.some((angle) => angle === 90)) {
    return 'right';
  } else if (angles.some((angle) => angle > 90)) {
    return 'obtuse';
  }

  return 'acute';
};

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"