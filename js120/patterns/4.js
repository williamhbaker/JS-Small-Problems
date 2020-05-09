function delegate(obj, obj2, methodName, ...args) {
  return function() {
    return obj2[methodName].call(obj, ...args);
  };
}

function extend(obj1, obj2) {
  // we need to delegate all of the methods from obj2 to obj1

  Object.keys(obj2).forEach((methodName) => {
    obj1[methodName] = delegate(obj1, obj2, methodName);
  });

  return obj1;
}

const professionalMixin = {
  invoice() {
    console.log(`${this.name} is billing the customer`);
  },

  payTax() {
    console.log(`${this.name} is paying taxes`);
  },
};

function Person(firstName, lastName, age, gender) {
  this.name = `${firstName} ${lastName}`;
  this.age = age;
  this.gender = gender;
}

Person.prototype = {
  constructor: Person,

  eat() {
    console.log('Eating');
  },

  communicate() {
    console.log('Communicating');
  },

  sleep() {
    console.log('Sleeping');
  },

  fullName() {
    return this.name;
  },
};

function Doctor(firstName, lastName, age, gender, specialty) {
  Person.call(this, firstName, lastName, age, gender);
  this.spec = specialty;
}

Doctor.prototype = {
  constructor: Doctor,

  diagnose() {
    console.log('Diagnosing');
  },
};

Object.setPrototypeOf(Doctor.prototype, Person.prototype);

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = {
  constructor: Professor,

  teach() {
    console.log(`Teaching ${this.subject}`);
  },
};

Object.setPrototypeOf(Professor.prototype, Person.prototype);

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype.study = function () {
  console.log(`Studying ${this.degree}`);
};

Object.setPrototypeOf(Student.prototype, Person.prototype);

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.gradDeg = graduateDegree;
}

GraduateStudent.prototype.research = function() {
  console.log(`Researching ${this.gradDeg}`);
};

Object.setPrototypeOf(GraduateStudent.prototype, Student.prototype);

let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professionalMixin);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professionalMixin);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professionalMixin.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
