let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let combined = ''

for (let i = 0; i < passcode.length; i += 1) {
  if (i === 0) {
    combined = passcode[i];
  } else {
    combined = combined.concat('-', passcode[i]);
  }
}

console.log(combined);