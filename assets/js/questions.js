// Quiz questions

let questionEl = document.querySelector("#question-title");
let choicesEl = document.querySelector("#choices");
let questionNumber = 0;

// const testQuestionsArray = [
//     { question: "Inside which HTML element do we put the JavaScript?", answers: ["1. <script>, 2.<js>, 3. <scripting>, 4. <javascript>"], correctAnswer: "1. <script>" },
//     { question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>', answers: ['1.  document.getElementByName("p").innerHTML = "Hello World!";, 2. document.getElementByName("p").innerHTML = "Hello World!";, 3.  document.getElementById("demo").innerHTML = "Hello World!";, 4.  #demo.innerHTML = "Hello World!";'], correctAnswer: '3.  document.getElementById("demo").innerHTML = "Hello World!"' },
//     { question: "How do you create a function in JavaScript?", answers: ["1.  function = myFunction(), 2. function myFunction(), 3.  function:myFunction(), 4. <javascript>"], correctAnswer: " 2. function myFunction()" },
//     { question: "How to write an IF statement in JavaScript?", answers: ["1. if i = 5, 2. if i = 5 then, 3. if (i==5), 4. if i == 5 then"], correctAnswer: "3. if (i==5)" },
//     { question: "How does a WHILE loop start?", answers: ["1. while (i <= 10), 2. while i = 1 to 10, 3. while (i <+ 10; i++), 4. <javascript>"], correctAnswer: "1. while (i <= 10)" },
// ];
const testQuestionsArray = [
    "Inside which HTML element do we put the JavaScript?", 
    'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>', 
    "How do you create a function in JavaScript?", 
    "How to write an IF statement in JavaScript?", 
    "How does a WHILE loop start?",
]
const testAnswersArray = [
    ['1. <script>', '2.<js>', '3. <scripting>', '4. <javascript>'],
    ['1.  document.getElementByName("p").innerHTML = "Hello World!"', '2. document.getElementByName("p").innerHTML = "Hello World!"', '3.  document.getElementById("demo").innerHTML = "Hello World!";, 4.  #demo.innerHTML = "Hello World!"'],
    ['1.  function = myFunction()', '2. function myFunction()', '3.  function:myFunction()', '4. <javascript>'],
    ['1. if i = 5', '2. if i = 5 then', '3. if (i==5)', '4. if i == 5 then'],
    ['1. while (i <= 10)', '2. while i = 1 to 10', '3. while (i <+ 10; i++)', '4. <javascript>'],
]

const correctAnswerArray =[
    "1. <script>",
    '3.  document.getElementById("demo").innerHTML = "Hello World!"',
    "2. function myFunction()",
    "1. while (i <= 10)"
]


function GenerateQuestion() {

    questionEl.textContent = testQuestionsArray[0];

    //const answersObj = testQuestionsArr[0].answers;
    //choicesEl.textContent = testQuestionsArray[questionNumber].answers;
    // for(i = 0; i <testQuestionsArr[0].answers.length; i++) {
    //     choices.innerHTML +=
    //     `<button id=choices class="button">${testQuestionsArr[0].answers}</button>`
    // }
    const answerOne= document.createElement("button");
    const answerTwo= document.createElement("button");
    const answerThree= document.createElement("button");
    const answerFour= document.createElement("button");

    answerOne.textContent = testAnswersArray[0][0];
    answerTwo.textContent = testAnswersArray[0][1];
    answerThree.textContent = testAnswersArray[0][2];
    answerFour.textContent = testAnswersArray[0][3];

    choicesEl.appendChild(answerOne);
    choicesEl.appendChild(answerTwo);
    choicesEl.appendChild(answerThree);
    choicesEl.appendChild(answerFour);


    // const answersObject = [testAnswersArray[0]];
        // function makeButtons() {
        //     for (var i = 0; i < testAnswersArray.length; i++) {
        //       $('.choices').append('<button value=' + testAnswersArray[i] + '>' +testAnswersArray[i] +
        //         '</button>');
        //     }
        //   }  
        //   makeButtons(buttons);
    // let answersOpts = [testAnswersArray[0]];
    // let choice1 = document.createElement("button")
    // choice1.textContent = answersOpts[1];
    // choicesEl.appendChild(choice1);
};


// // Initialize an empty string to store the HTML 
// let answerBtnsHTML = "";

// // Build the HTML string for answer buttons within a for loop
// for (let i = 0; i < answersObj.length; i++) {
//     answerBtnsHTML += `<button class="potentialAnswer">${answersObj[i]}</button>`;
// }

// // Append the entire HTML string to the potentialAnswersEl at once
// choicesEl.innerHTML = answerBtnsHTML;

// // Add event listeners to the newly created answer buttons
// const answerBtns = choicesEl.querySelectorAll(".potentialAnswer");

// answerBtns.forEach((btn) => {
//     btn.addEventListener("click", function (event) {
//         answer = testQuestionsArray[questionNumber].correctAnswer;
//         iterateQuestion();
//     });
// });
