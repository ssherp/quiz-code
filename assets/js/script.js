//global variables
var score = 0;
var timeLeft = 100;
var questions = [
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        answer: 'const'
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify", "parse", "convert", "element"],
        answer: "stringify"
    },
    {
        question: "Which of the following is not a Javascript framework?",
        choices: ["node", "vue", "react", "cassandra"],
        answer: "cassandra"
    },
    {
        question: "Which of the following scoping type does JavaScript use?",
        choices: ["sequential", "segmental", "lexical", "literal"],
        answer: "lexical"
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        choices: ["br", "a", "pre", "b"],
        answer: "br"
    }
];
//all of our selectors
var startButton = document.getElementById("start-button");
var displayInit = document.querySelector("#displayStart");
var displayQuestion = document.querySelector("#display-question");
var choicesContainer = document.querySelector("#choices");
var timeLeftDisplay = document.querySelector("#time-left");
var currentQuestionIndex = 0;
var quizTimer;


//function
function gameStart() {
    displayInit.style.display = "none";
    showQuestion();
    startTimer();
    //starts the timer
    choicesContainer.addEventListener("click", checkAnswer);
    //trggered when they pressed button(event listener)
}
function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    displayQuestion.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = currentQuestion.choices[i];
        choicesContainer.appendChild(choiceButton);
    }
}
function startTimer() {
    quizTimer = setInterval(function () {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;

        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            endGame();
        }
    }, 1000);
}
function checkAnswer(event) {
    if (event.target.matches("button")) {
        var selectedAnswer = event.target.textContent;
        var currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.answer) {
            score++;
        }
        else {
            timeLeft -= 15;
        }
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length);
        showQuestion();
    }
    else {
        endGame();
    }
}



