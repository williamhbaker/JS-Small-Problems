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
      delete matchingCourse.note
      matchingCourse.note = note;
    },

    viewNotes() {
      let coursesWithNotes = this.courses.filter((course) => course.hasOwnProperty('note'));
      coursesWithNotes.forEach((course) => console.log(`${course.name}: ${course.note}`));
    },
  };
}


let foo = createStudent('Foo', '1st');
foo.info();

foo.listCourses();

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();

foo.addNote(102, 'Difficult subject');
foo.viewNotes();


foo.updateNote(101, 'Fun course');
foo.viewNotes();
