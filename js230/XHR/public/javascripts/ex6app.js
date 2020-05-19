class API {
  async getSchedules() {
    let response = await fetch('/api/schedules');
    return response.ok ? response.json() : null;
  }

  async getStaff() {
    let response = await fetch('/api/staff_members');
    return response.ok ? response.json() : null;
  }
}

class PageView {
  constructor(app) {
    this.app = app;
    this.list = document.querySelector('ul');
    this.bindEvents();
  }

  bindEvents() {
    this.list.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    if (event.target.tagName === 'LI' && event.target.parentElement.tagName === 'A') {
      let parent = event.target.parentElement;
      let ul = parent.nextElementSibling;
      ul.classList.toggle('shown');
    }
  }

  showStuff(data) {
    Object.keys(data).forEach((date) => {
      let listHeader = document.createElement('li');
      let headerAnchor = document.createElement('a');
      headerAnchor.setAttribute('href', '#');
      listHeader.innerText = date;
      headerAnchor.appendChild(listHeader);
      this.list.appendChild(headerAnchor);

      let subList = document.createElement('ul');

      let theseBookings = data[date];
      theseBookings.forEach((booking) => {
        let elem = document.createElement('li');
        elem.innerText = `${booking.teacherName} | ${booking.studentEmail} | ${booking.time}`;
        subList.appendChild(elem);
      });

      this.list.appendChild(subList);
    });
  }
}

class App {
  constructor() {
    this.api = new API();
    this.pageView = new PageView(this);
    this.bookingData = {};
    this.getBookingData();
  }

  async getBookingData() {
    let staff = await this.api.getStaff();
    let schedules = await this.api.getSchedules();
    schedules = schedules.filter((sched) => sched.student_email);

    let compiledData = {};
    schedules.forEach((sched) => {
      compiledData[sched.date] = compiledData[sched.date] || [];
      compiledData[sched.date].push({
        teacherName: this.staffNameFromId(staff, sched.staff_id),
        studentEmail: sched.student_email,
        time: sched.time,
      });
    });

    this.bookingData = compiledData;

    this.pageView.showStuff(this.bookingData);
  }

  staffNameFromId(staffList, id) {
    let thisStaff = staffList.find((staff) => +staff.id === +id);
    return thisStaff.name;
  }
}

let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new App();
});