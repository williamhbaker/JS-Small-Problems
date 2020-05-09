function century(year) {
  let century = Math.ceil(year / 100);
  return `${String(century)}${centurySuffix(century)}`;
}

function centurySuffix(century) {
  if ([11, 12, 13].includes(century % 100)) {
    return 'th';
  }
  let lastDigit = century % 10;

  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

console.log(century(2000) === "20th");        // "20th"
console.log(century(2001) === "21st");        // "21st"
console.log(century(1965) === "20th");        // "20th"
console.log(century(256) === "3rd");         // "3rd"
console.log(century(5) === "1st");           // "1st"
console.log(century(10103) === "102nd");       // "102nd"
console.log(century(1052) === "11th");        // "11th"
console.log(century(1127) === "12th");        // "12th"
console.log(century(11201) === "113th");       // "113th"