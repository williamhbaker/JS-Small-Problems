class API {
  constructor() {
  }

  getSchedules() {
    let url = '/api/schedules';

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.timeout = 5000;

    request.addEventListener('load', () => {
      let tallied = {};
      request.response.forEach((schedule) => {
        tallied[schedule.staff_id] = tallied[schedule.staff_id] || 0;
        tallied[schedule.staff_id] += 1;
      });
      console.log(tallied);
    });

    request.addEventListener('timeout', () => {
      console.log('timed out try again');
    });

    request.send();
  }

  addStaff(staffJSON) {
    let url = '/api/staff_members';
    let method = 'POST';

    let request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.responseType = 'json';

    request.addEventListener('load', () => {
      let newId = request.response.id;
      alert(`Successfully created staff with id: ${newId}`);

    });

    request.send(staffJSON);
  }
}

class UI {
  constructor(app) {
    this.app = app;
    this.form = document.querySelector('form');
    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.form.checkValidity()) {
      let data = new FormData(event.target);
      let staffJSON = JSON.stringify(Object.fromEntries(data.entries()));
      this.app.addStaff(staffJSON);
      this.form.reset();
    } else {
      alert('Invalid input, please correct and try again!');
    }
  }
}

class App {
  constructor() {
    this.api = new API();
    this.ui = new UI(this);
  }

  addStaff(staffJSON) {
    this.api.addStaff(staffJSON);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let app = new App();
});