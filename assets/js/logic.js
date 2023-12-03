
// start button: event listener to trigger the timer and 1st question appears
//start button and timer
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
let count = 180;
          // let scoreEl = document.querySelector("final-score");
          // let HighscoreListEl = document.querySelector("highscores");
          // let initialsInput = document.querySelector("initials");
          // let saveButtonEl = document.querySelector("submit");
          // //let progressEl = document.querySelector()/ 

          // let questionNumber= 0;
          // let quizEnded = false;
          // let progressTimeout;

          // const userInfoArr= JSON.parse(localStorage.getItem('userInfoArr')) || [];

//function to start the quiz: trigger timer, hide start screen, function to display question one
let timerEl = document.querySelector("#time");
let secondsLeft = timerEl.textContent = count;

const startQuiz = document.querySelector("#start");
startQuiz.addEventListener("click", function () {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.add("start");
  
    timer();
  
    quizQuestions();
});  
  // countdown
  const timer = setInterval(function () {
    count--;
    timerEl.textContent = count;
    if (count === 0) {
      clearInterval(timer);
      sendMessage("Time's up!");
    }
  }, 1000);




const quizQuestions = () => {
  generateButtons();

  questionEl.textContent= testQuestionsArray[questionNumber].question;
};

const generateButtons = () => {

  choicesEl.textContent = "";
  const answersObject = testQuestionsArray[questionNumber].answers;

  let answerButtonHTML = "";
   for (let i=0; i < answersObject.length; i++) {
    answerButtonHTML += `<button class= "button">${answersObject[i]}</button>`;
   }

   choicesEl.innerHTML = answerButtonHTML;

   const answerButtons = choicesEl.querySelectorAll(".choices");

   answerButtons.forEach((button) => {
    button.addEventListener("click", function(event) {
      answer = testQuestionsArray[questionNumber].correctAnswer;
      iterateQuestion();
    });
    
   });
}

const iterateQuestion = () => {
  clearTimeout (progressTimeout);
  if (answer === event.target.textContent) {
    progressEl.textContent = "Correct!";;
    showProgress();
  } else {
    progressEl.textContent = "Wrong!";
    count = count - 10;
    showProgress();
  }

  questionNumber++;

  if ( questionNumber < testQuestionsArray.length) {
    quizQuestions();
  }

  progressTimeout = setTimeout(hideProgress, 3000);
};

const showProgress = () => progressEl.removeAttribute("style");
const hideProgress = () => progressEl.style.display="none";

const endQuiz = () => {
  clearInterval (timer);

  document.getElementById("questions").classList.add("hide");
  document.getElementById("time").classList.add("hide");
  document.getElementById("final-score").classList.remove("hide");


}


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