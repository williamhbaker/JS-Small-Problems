function randIntBetween(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function randLetter() {
  let chars = [];
  for (let idx = 65; idx <= 122; idx += 1) {
    chars.push(String.fromCharCode(idx));
  }

  chars = chars.filter((char) => char.match(/[a-z]/i));
  return chars[randIntBetween(0, chars.length - 1)];
}

function randSequence() {
  return Array(16).fill().map((_) => randLetter()).join('');
}

function checkPassword(actual, input) {
  if (actual === input) return true;
  console.log('Invalid Password');
  return false;
}

let Account = {
  init(emailStr, password, firstNameStr, lastNameStr) {
    this.emailStr = emailStr;
    this.password = password;
    this.firstNameStr = firstNameStr;
    this.lastNameStr = lastNameStr;
    this.displayName = randSequence();
    return this;
  },

  reanonymize(password) {
    if (checkPassword(this.password, password)) {
      this.displayName = randSequence();
      return true;
    }
  },

  resetPassword(current, newPass) {
    if (checkPassword(this.password, current)) {
      this.password = newPass;
      return true;
    }
  },

  firstName(password) {
    if (checkPassword(this.password, password)) {
      return this.firstNameStr;
    }
  },

  lastName(password) {
    if (checkPassword(this.password, password)) {
      return this.lastNameStr;
    }
  },

  email(password) {
    if (checkPassword(this.password, password)) {
      return this.emailStr;
    }
  },
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false