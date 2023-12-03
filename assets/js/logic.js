//define questions
// start button: event listener to trigger the timer and 1st question appears
//start button and timer
let count = 180;

let timeEl = document.querySelector("#time");
let secondsLeft = timeEl.textContent = count;
const startQuiz = document.querySelector("#start");
startQuiz.addEventListener("click", function () {
  //open first question: 


  let mode = "hide"

  if (mode === "hide") {
    mode = "show";
    questionOneText.textContent = "?This is the first questions?";
    answersOne = "hjkbj";
  }

  // countdown
  const timer = setInterval(function () {
    count--;
    timeEl.textContent = count;
    if (count === 0) {
      clearInterval(timer);
      sendMessage("Time's up!");
    }
  }, 1000);
});
  //subtract time when the answer is incorrect
  //event when the answer is clicked



 //open first question: add click event listener to "start quiz" button
  // display the first question based on the questions that we have defined
  // hide the start screen
  //show questions screen and populate it with questions and the choices
  // add  click event listener to choices div and check if the choice button is clicked
  //      if it's correct 
  //          display "coorect answer" in feedback div
  //          hide feedback div then display next question
  //      if not correct
  //subtract the timer
  //display "wrong answer" in feedback div
  //check the timer
  //if timer > 0, hide feedback div then display next question
  // if timer<=0, hide feedback div then go display "end screen" scrfeen and hide question screen

// insert questions via JS. define questions and the answers, put it in a variable in questions.js file
// const questionOne = document.createElement('div');
// questionOne.textContent = 'insert text for the first question:';
// div.appendChild(questionOne);
//subtract time when the answer is incorrect
//event when the answer is clicked

//all questions answers OR timer = 0  => quiz finished!

//show score





//highscore.html
// retrieve highscores from local storage
// sort the scores from higher  to lower
// display the highscores as a list
// when the user click on "clear highscores",  clear local storage


//how to use audio file
// const correctAudio= new Audio ('./sfx/correct.wav');
//document.getElementById('start').addEventListener('click', function(){
//    correctAudio.play();
//  });