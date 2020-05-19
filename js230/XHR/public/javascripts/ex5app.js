class API {
  constructor(app) {
    this.app = app;
  }

  async getScheduleList() {
    let url = '/api/schedules';
    let response = await fetch(url);

    if (response.ok) {
      return response.json();
    } else {
      console.log('Server error.');
      return null;
    }
  }

  async getStaffList() {
    let url = '/api/staff_members';
    let response = await fetch(url);

    if (response.ok) {
      return response.json();
    } else {
      console.log('Server error.');
      return null;
    }
  }

  async createSchedule(dataJSON) {
    let url = '/api/bookings';
    let init = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: dataJSON,
    };

    let response = await fetch(url, init);
    let result = await response.text();

    if (response.ok) {
      return true;
    } else if (result.includes('booking_sequence')) {
      return result.match(/\d+$/);
    } else {
      console.log('Server error.');
      return null;
    }
  }

  async createStudent(dataJSON) {
    let url = '/api/students';
    let init = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: dataJSON,
    };

    let response = await fetch(url, init);

    if (response.ok) {
      return response.text();
    } else {
      console.log('Server error.');
      return null;
    }
  }
}

class AddStudentForm {
  constructor(app) {
    this.app = app;
    this.form = document.querySelector('#new_student');

    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  resetAndHideForm() {
    this.form.reset();
    this.form.classList.add('hidden');
  }

  showForm(email, bookingSequence) {
    this.form.querySelector('input[name="email"]').value = email;
    this.form.querySelector('input[name="booking_sequence"]')
      .value = bookingSequence;
    this.form.classList.remove('hidden');
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let dataJSON = JSON.stringify(Object.fromEntries(data.entries()));
    this.app.createStudent(dataJSON);
  }
}

class ScheduleForm {
  constructor(app) {
    this.app = app;
    this.form = document.querySelector('#add_schedule');

    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  resetForm() {
    this.form.reset();
    this.app.getAvailableSchedules();
  }

  submitForm() {
    this.form.dispatchEvent(new Event('submit'));
  }

  toggleEnabled(boolean) {
    [...this.form.elements].forEach((elem) => (elem.disabled = !boolean));
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let dataJSON = JSON.stringify(Object.fromEntries(data.entries()));
    this.app.bookSchedule(dataJSON);
  }

  populateScheduleList(availableSchedules) {
    let selectList = this.form.querySelector('select[name="id"]');
    selectList.length = 0;
    selectList.append(new Option());

    availableSchedules.forEach((schedule) => {
      let optionText = `${schedule.staffName} | ${schedule.date} | ${schedule.time}`;
      let thisOption = new Option(optionText, schedule.scheduleId);
      selectList.append(thisOption);
    });
  }
}

class App {
  constructor() {
    this.api = new API(this);
    this.scheduleForm = new ScheduleForm(this);
    this.addStudentForm = new AddStudentForm(this);
    this.getAvailableSchedules();
  }

  async getAvailableSchedules() {
    this.scheduleForm.toggleEnabled(false);

    let schedules = await this.api.getScheduleList();
    let staffNames = await this.api.getStaffList();

    let available = schedules.filter((schedule) =>
      schedule.student_email === null
    );
    let schedulesWithNames = available.map((schedule) => {
      return {
        scheduleId: schedule.id,
        staffName: this.staffNameFromID(staffNames, schedule.staff_id),
        date: schedule.date,
        time: schedule.time,
      };
    });

    this.scheduleForm.populateScheduleList(schedulesWithNames);
    this.scheduleForm.toggleEnabled(true);
  }

  staffNameFromID(staffNames, id) {
    let thisStaff = staffNames.find((staff) => staff.id === id);
    return thisStaff.name;
  }

  async bookSchedule(dataJSON) {
    let response = await this.api.createSchedule(dataJSON);

    if (response === true) {
      alert('Schedule added!');
      this.scheduleForm.resetForm();
      this.addStudentForm.resetAndHideForm();
    } else if (response) {
      let email = JSON.parse(dataJSON).student_email;
      this.addStudentForm.showForm(email, response);
      alert('new sequence is ' + response);
    }
  }

  async createStudent(dataJSON) {
    let response = await this.api.createStudent(dataJSON);
    if (response) {
      alert(response);
      this.scheduleForm.submitForm();
    }
  }
}

// eslint-disable-next-line no-unused-vars
let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new App();
});