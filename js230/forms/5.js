const questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
  },
];

const answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

class QuestionForm {
  constructor(app) {
    this.app = app;
    this.templates = {};
    this.form = document.querySelector('form');
    this.compileTemplates();
    this.populate();
    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.form.addEventListener('reset', this.handleReset.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(this.form);
    let results = this.app.gradeAnswers(Object.fromEntries(data.entries()));
    this.updateFormWithResults(results);
    this.form.querySelector('input[type="submit"]').disabled = true;
  }

  handleReset(event) {
    event.preventDefault();
    this.form.querySelector('input[type="submit"]').disabled = false;
    this.populate();
  }

  compileTemplates() {
    let rawTemplates = document.querySelectorAll('[type="text/x-handlebars"]');
    [...rawTemplates].forEach((rawTemplate) => {
      let templateId = rawTemplate.getAttribute('id');
      this.templates[templateId] = Handlebars.compile(rawTemplate.innerHTML);

      if (rawTemplate.dataset.type === "partial") {
        Handlebars.registerPartial(templateId, rawTemplate.innerHTML);
      }

      rawTemplate.remove();
    });
  }

  populate() {
    this.form.querySelector('fieldset dl').innerHTML = this.templates.questionTemplate({ questions });
  }

  updateFormWithResults(resultsObj) {
    let resultsAreas = this.form.querySelectorAll('dl p');
    [...resultsAreas].forEach((areaElem) => {
      let questionId = areaElem.dataset.questionid;
      let content = this.templates.resultTemplate(resultsObj[questionId]);
      areaElem.parentElement.innerHTML = content;
    });
  }
}

class App {
  constructor() {
    this.questionForm = new QuestionForm(this);
    this.questions = questions;
    this.answers = answerKey;
  }

  // eslint-disable-next-line max-lines-per-function
  gradeAnswers(dataObj) {
    let results = {};

    this.questions.forEach((question) => {
      let id = question.id;
      results[id] = {};
      let actualAnswer = this.answers[id];
      let givenAnswer = dataObj[`question_${id}`];

      results[id].id = id;
      results[id].correctAnswer = actualAnswer;

      if (givenAnswer === undefined) {
        results[id].correct = false;
        results[id].answered = false;
      } else if (givenAnswer === actualAnswer) {
        results[id].correct = true;
        results[id].answered = true;
      } else {
        results[id].correct = false;
        results[id].answered = true;
      }
    });

    return results;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let app = new App();
});