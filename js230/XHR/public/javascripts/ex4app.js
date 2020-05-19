class API {
  async getStaffList() {
    let url = '/api/staff_members';
    let init = {
      method: 'get',
    };

    let response = await fetch(url, init);
    if (response.ok) {
      let data = await response.json();
      return data;
    }

    return null;
  }

  async addStaffSchedules(data) {
    let url = '/api/schedules';
    let init = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    };

    let response = await fetch(url, init);

    if (response.ok) {
      let data = await response.text();
      return data;
    }

    return null;
  }
}

class UI {
  constructor(app) {
    this.app = app;
    this.form = document.querySelector('form');
    this.baseInput = this.form.querySelector('fieldset').cloneNode(true);

    this.bindEvents();
    this.populateNameOptions(this.form.querySelector('select[name="staff_id"]'));
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    document.querySelector('#addSchedule').addEventListener('click', this.handleAddSchedule.bind(this));
  }

  handleAddSchedule(event) {
    event.preventDefault();
    let submitButton = this.form.querySelector('input[type="submit"]');
    let newFieldset = this.baseInput.cloneNode(true);
    this.form.insertBefore(newFieldset, submitButton);
    this.populateNameOptions(newFieldset.querySelector('select[name="staff_id"]'));
  }

  serializeForm() {
    let fieldSets = [...this.form.querySelectorAll('fieldset')];
    let objectArray = fieldSets.map((fieldSet) => {
      let data = {};
      [...fieldSet.elements].forEach((elem) => {
        data[elem.getAttribute('name')] = elem.value;
      });

      return data;
    });

    return JSON.stringify({schedules: objectArray});
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      let response = await this.app.addStaffSchedules(this.serializeForm());
      alert(response);
      event.target.reset();
    } else {
      alert('Invalid inputs - please check your inputs and try again!');
    }
  }

  async populateNameOptions(nameSelector) {
    let names = await this.app.getStaffList();

    names.forEach((staff) => {
      let option = new Option(staff.name, staff.id);
      nameSelector.appendChild(option);
    });
  }
}

class App {
  constructor() {
    this.staffList = [];
    this.api = new API();
    this.ui = new UI(this);
  }

  async getStaffList() {
    if (this.staffList.length === 0) {
      this.staffList = await this.api.getStaffList();
    }
    return this.staffList;
  }

  addStaffSchedules(data) {
    return this.api.addStaffSchedules(data);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let app = new App();
});