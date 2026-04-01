var questions = [
  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    options: ["var variableName;", "let variableName;", "const variableName;", "All of the above"],
    ans: "All of the above"
  },
  {
    question: "Which of the following is used to create an object in JavaScript?",
    options: ["{}", "[]", "()", "< >"],
    ans: "{}"
  },
  {
    question: "Which method is used to parse a string to an integer in JavaScript?",
    options: ["parseInt()", "parseInteger()", "parseNumber()", "parseFloat()"],
    ans: "parseInt()"
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["var", "let", "const", "define"],
    ans: "const"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    ans: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript (single-line)?",
    options: ["//", "<!-- -->", "/* */", "#"],
    ans: "//"
  },
  {
    question: "How do you write 'Hello' in an alert box?",
    options: ["alert(Hello)", "msg(Hello)", "alert('Hello')", "console.log(Hello)"],
    ans: "alert('Hello')"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "+"],
    ans: "="
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Ordinance Model", "Desktop Object Management"],
    ans: "Document Object Model"
  },
  {
    question: "Which method is used to select an element by ID?",
    options: ["getElementById()", "querySelectorAll()", "getElementsByClassName()", "selectById()"],
    ans: "getElementById()"
  }
];

var index = 0;
var score = 0;
var timeLeft = 30;
var timer;

function startTimer() {
  clearInterval(timer);
  timeLeft = 30;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timer);
      next(); 
    }
  }, 3000);
}

function render() {
  var app = document.getElementById("app");

  if (index >= questions.length) {
    clearInterval(timer);
    var percent = ((score / questions.length) * 100).toFixed(0);
    app.innerHTML = `
      <div class="result-box">
        <h2>🎉 Quiz Completed</h2>
        <h3>${percent}% Score</h3>
        <p>You got ${score} out of ${questions.length} correct</p>
        <button class="btn btn-primary" onclick="restart()">Restart</button>
      </div>
    `;
    return;
  }

  var q = questions[index];

  app.innerHTML = `
    <div class="timer">⏱ Time Left: <span id="time">30s</span></div>

    <div class="progress">
      <div class="progress-bar" style="width: ${(index / questions.length) * 100}%"></div>
    </div>

    <div class="question">Q${index + 1}: ${q.question}</div>

    ${q.options.map(opt => `
      <label class="option">
        <input type="radio" name="option" value="${opt}"> ${opt}
      </label>
    `).join("")}

    <div class="d-flex justify-content-between mt-3">
      <button class="btn btn-secondary btn-custom" onclick="prev()" ${index==0?'disabled':''}>Previous</button>
      <button class="btn btn-success btn-custom" onclick="next()">${index==questions.length-1?'Submit':'Next'}</button>
    </div>
  `;

  startTimer();
}

function next() {
  var selected = document.querySelector('input[name="option"]:checked');

  if (selected && selected.value === questions[index].ans) {
    score++;
  }

  index++;
  render();
}

function prev() {
  if (index > 0) {
    index--;
    render();
  }
}

function restart() {
  index = 0;
  score = 0;
  render();
}

render();