var questions = [
  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    opt1 : "var variableName;",
    opt2: "let variableName;",
    opt3: "const variableName;",
    opt4: "All of the above",
    ans: "All of the above"
  },
  {
    question: "Which of the following is used to create an object in JavaScript?",
     opt1 : "{}",
    opt2: "[]",
    opt3: "()",
    opt4: "<>",
    ans: "{}"
  },
  {
    question: "Which method is used to parse a string to an integer in JavaScript?",
     opt1 : "parseInt()",
    opt2: "parseInteger()",
    opt3: "parseNumber()",
    opt4: "parseFloat()",
    ans: "parseInt()"
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    opt1 : "var",
    opt2: "let",
    opt3: "const",
    opt4: "define",
    ans: "const"
  },
  // {
  //   question: "Which company developed JavaScript?",
  //   options: ["Microsoft", "Netscape", "Google", "Apple"],
  //   ans: "Netscape"
  // },
  // {
  //   question: "Which symbol is used for comments in JavaScript (single-line)?",
  //   options: ["//", "<!-- -->", "/* */", "#"],
  //   ans: "//"
  // },
  // {
  //   question: "How do you write 'Hello' in an alert box?",
  //   options: ["alert(Hello)", "msg(Hello)", "alert('Hello')", "console.log(Hello)"],
  //   ans: "alert('Hello')"
  // },
  // {
  //   question: "Which operator is used to assign a value to a variable?",
  //   options: ["*", "=", "-", "+"],
  //   ans: "="
  // },
  // {
  //   question: "What does DOM stand for?",
  //   options: ["Document Object Model", "Data Object Model", "Digital Ordinance Model", "Desktop Object Management"],
  //   ans: "Document Object Model"
  // },
  // {
  //   question: "Which method is used to select an element by ID?",
  //   options: ["getElementById()", "querySelectorAll()", "getElementsByClassName()", "selectById()"],
  //   ans: "getElementById()"
  // }
];
var index = 0;
var score = 0;
var interval = null;
function renderQuiz(){
  var quizcontainer = document.getElementById("quizcontainer")
  var option = document.getElementsByName("option")
  for(var i = 0; i < option.length; i++){
    if(option[i].checked){
      if(option[i].value == questions[index-1].ans){
        score++
        
      }
    }
  }

  if(!questions[index]){
  var percentage = Math.round((score / questions.length) * 100)
  var username = localStorage.getItem("username") 

  quizcontainer.innerHTML = `
    <div class="d-flex justify-content-center align-items-center ">
      <div class="card shadow-lg text-center p-5" style="width: 350px; border-radius: 20px; backgroud-color:#ABD1C6;>
        
        <h2 class="mb-2 f-bold"> Quiz Completed</h2>

        <h4 class="text-dark mb-3">
          👤 ${username ? username : "User"}
        </h4>
        
        <h1 class="text-success fw-bold display-4">
          ${score} / ${questions.length}
        </h1>

        <h3 class="text-primary mt-2">
          ${percentage}%
        </h3>
        
        <p class="mt-3 text-muted">
          ${percentage === 100 
            ? "Perfect! 🔥" 
            : percentage >= 50 
              ? "Good Job 👍" 
              : "Keep Practicing 💪"}
        </p>

        <button class="btn btn-primary mt-3" onclick="location.reload()">
          🔄 Restart Quiz
        </button>

      </div>
    </div>
  `
  return
}
  quizcontainer.innerHTML = `
    <div class="bg-light timer d-flex align-items-center justify-content-center mx-auto"><h3 class="text-center mt-1" id="timer"></h3></div>
      <p class="fw-bold fs-5 card p-4 mt-2">${questions[index].question}</p>
      <div>
        <div class="card p-1 mt-4 indiv ">
          <label class="mt-2"><input type="radio" name="option" value="${questions[index].opt1}" class="mb-3 ms-3">
            ${questions[index].opt1}</label>
        </div>
        <div class="card p-1 my-3 indiv">
          <label class="mt-2"><input type="radio" name="option" value="${questions[index].opt2}" class="mb-3 ms-3">
            ${questions[index].opt2}</label>
        </div>
        <div class="card p-1 indiv">
          <label class="mt-2"><input type="radio" name="option" value="${questions[index].opt3}" class="mb-3 ms-3">
            ${questions[index].opt3}</label>
        </div>
        <div class="card p-1 my-3 indiv">
          <label class="mt-2"><input type="radio" name="option" value="${questions[index].opt4}" class="mb-3 ms-3">
            ${questions[index].opt4}</label>
        </div>
        <div class="d-flex ">
          <button class="btn btn-danger ms-auto" onclick="previous()">Previous</button>
          <button class="btn btn-success  ms-4 " onclick="next()">Next</button>
        </div>
      </div>

  `
  
 
  timer()
}
 
function next(){
  var option = document.getElementsByName("option")
  var selected = false

  for(var i = 0; i < option.length; i++){
    if(option[i].checked){
      selected = true
      break
    }
  }

  if(!selected){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please select an option first!',
      confirmButtonColor: '#3085d6'
    })
    return
  }
  clearInterval(interval)
  index++
  renderQuiz()
}
function previous(){
  if(index > 0){
    clearInterval(interval)
    index -= 1
    renderQuiz()
  }
}
renderQuiz()


function timer(){
  clearInterval(interval) 

  var time = 30; 
  interval = setInterval(()=>{
    var timeid = document.getElementById("timer")
    if(timeid){
      timeid.innerHTML = time 
    }

    time--

    if(time < 0 ){
      clearInterval(interval)
      renderQuiz()
    }
  },1000)
}

function submit(){
  var nameInput = document.getElementsByClassName("enName")[0]
  var suba = document.getElementById("submit")
  
  if(nameInput.value.trim()){
    var suba = document.getElementById("submit")
    localStorage.setItem("username", nameInput.value)
    suba.setAttribute("href", "quiz.html")
  }
}



