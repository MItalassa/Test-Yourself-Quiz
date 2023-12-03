// Quiz questions

let questionEl = document.querySelector("#question-title");
let choicesEl= document.querySelector("#choices");

const testQuestionsArray = [
  Q1=  {question: "Inside which HTML element do we put the JavaScript?", answers: ["1. <script>, 2.<js>, 3. <scripting>, 4. <javascript>"], correctAnswer: "1. <script>"},
  Q2=  {question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>', answers: ['1.  document.getElementByName("p").innerHTML = "Hello World!";, 2. document.getElementByName("p").innerHTML = "Hello World!";, 3.  document.getElementById("demo").innerHTML = "Hello World!";, 4.  #demo.innerHTML = "Hello World!";'], correctAnswer: '3.  document.getElementById("demo").innerHTML = "Hello World!"'},
  Q3=  {question: "How do you create a function in JavaScript?", answers: ["1.  function = myFunction(), 2. function myFunction(), 3.  function:myFunction(), 4. <javascript>"], correctAnswer: " 2. function myFunction()"},
  Q4=  {question: "How to write an IF statement in JavaScript?", answers: ["1. if i = 5, 2. if i = 5 then, 3. if (i==5), 4. if i == 5 then"], correctAnswer: "3. if (i==5)"},
  Q5=  {question: "How does a WHILE loop start?", answers: ["1. while (i <= 10), 2. while i = 1 to 10, 3. while (i <+ 10; i++), 4. <javascript>"], correctAnswer: "1. while (i <= 10)"},
];

console.log (testQuestionsArray);