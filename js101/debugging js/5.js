function range(start, end = -1) {
  let range = [];

  if (end === -1) {
    [start, end] = [0, start];
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));