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

let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'