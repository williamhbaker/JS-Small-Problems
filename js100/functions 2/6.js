// bmi = weight_in_kg / height_in_m**2

const centimetersToMetersFactor = 100;

let calculateBMI = function(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / centimetersToMetersFactor;
  let unroundedBMI = weightInKilograms / heightInMeters**2;
  return unroundedBMI.toFixed(2);
}

console.log(calculateBMI(180, 80)); // 24.69