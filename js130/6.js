let Account = {
  init(email, password, firstName, lastName) {
    this.userEmail = email;
    this.password = password;
    this.userFirstName = firstName;
    this.userLastName = lastName;
    this.userDisplayName = null;
    this.reanonymize(this.password);
    return this;
  },

  reanonymize(password) {
    if (password !== this.password) return 'Invalid Password';

    this.displayName = (() => {
      let randBetween = (min, max) => (
        Math.floor(Math.random() * (max - min + 1)) + min
      );

      return Array(16).fill().map((_) =>
        String.fromCharCode(randBetween(65, 122))
      ).join('');
    })();

    return true;
  },

  resetPassword(current, newPwd) {
    if (current !== this.password) return 'Invalid Password';
    this.password = newPwd;
    return true;
  },

  firstName(password) {
    if (password !== this.password) return 'Invalid Password';
    return this.userFirstName;
  },

  lastName(password) {
    if (password !== this.password) return 'Invalid Password';
    return this.userLastName;
  },

  email(password) {
    if (password !== this.password) return 'Invalid Password';
    return this.userEmail;
  },
};

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456') === 'foo');           // logs 'foo'
console.log(fooBar.firstName('abc') === 'Invalid Password');              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc') === 'Invalid Password');    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc') === true); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc') === true);                         // returns true
console.log((displayName === fooBar.displayName) === false);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should 'foo@bar.com'