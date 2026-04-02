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
    quizcontainer.innerHTML = `<h1>${score}</h1>`
    return
  }
  
  quizcontainer.innerHTML = `
    <div class="bg-light timer d-flex align-items-center justify-content-center mx-auto"><h3 class="text-center mt-1" id="timer">30</h3></div>
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
  
  index++
  timer()
}
function next(){

}

renderQuiz()


function timer(){
  var time = 30; 
  var interval = setInterval(()=>{
   var timeid = document.getElementById("timer")
   timeid.innerHTML = time 
   time--
   if(time < 0 ){
     clearInterval(interval)
     renderQuiz()
   }
  },1000)
}
function submit(){
  var submit = document.getElementsByClassName("enName")[0]
  var suba = document.getElementById("submit")
  
  if(submit.value.trim()){
    var suba = document.getElementById("submit")
    suba.setAttribute("href", "quiz.html")
  }
}



