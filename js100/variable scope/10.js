const a = {
  firstName: 'John',
  lastName: 'Doe'
};

a.middleName = 'test';
delete a.firstName;
a = {};

console.log(a);