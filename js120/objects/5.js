/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      let matchingCourse = this.courses.find((course) => course.code === code);

      if (matchingCourse.note) {
        matchingCourse.note += `; ${note}`;
      } else {
        matchingCourse.note = note;
      }
    },

    updateNote(code, note) {
      let matchingCourse = this.courses.find((course) => course.code === code);
      delete matchingCourse.note;
      matchingCourse.note = note;
    },

    viewNotes() {
      let coursesWithNotes = this.courses.filter((course) => course.hasOwnProperty('note'));
      coursesWithNotes.forEach((course) => console.log(`${course.name}: ${course.note}`));
    },
  };
}

function createSchool() {
  return {
    students: [],

    addStudent(name, year) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        this.students.push(createStudent(name, year));
        return this.students[this.students.length - 1];
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent(student, course) {
      student.courses.push(course);
    },

    addGrade(student, course, grade) {
      let thisCourse = student.courses.find((aCourse) => aCourse.name === course);
      thisCourse.grade = grade;
    },

    getReportCard(student) {
      student.courses.forEach((course) => {
        let courseGrade = course.grade || 'In progress';
        console.log(`${course.name}: ${courseGrade}`);
      });
    },

    getStudentGradesForCourse(courseName) {
      let grades = {};

      this.students.forEach((student) => {
        let thisCourse = student.courses.find((course) =>
          course.name === courseName
        );

        if (thisCourse) {
          grades[student.name] = thisCourse.grade;
        }
      });

      return grades;
    },

    getAverageGradeFromList(grades) {
      let sum = Object.values(grades).reduce((sum, num) => sum + num);
      let length = Object.values(grades).length;
      return Math.round(sum / length);
    },

    courseReport(courseName) {
      let grades = this.getStudentGradesForCourse(courseName);
      let average = this.getAverageGradeFromList(grades);

      if (average) {
        console.log(`=${courseName} Grades=`);

        Object.keys(grades).forEach((name) => {
          console.log(`${name}: ${grades[name]}`);
        });

        console.log('---');
        console.log(`Course Average: ${average}`);
      } else {
        console.log('undefined');
      }
    },
  };
}

let school = createSchool();
let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, {name: 'Math', code: 101});
school.enrollStudent(foo, {name: 'Advanced Math', code: 102});
school.enrollStudent(foo, {name: 'Physics', code: 202});
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

school.getReportCard(foo);