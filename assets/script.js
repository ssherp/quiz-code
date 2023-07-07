var score = 0;
var timeLeft = 100;
//maked object array
var questions = [
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        answer: 'const'
    },
    {
        question: "Which function is used to serialize an object into a JSON string in JavaScript?",
        choices: ["stringify", "parse", "convert", "element"],
        answer: "stringify"
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        choices: ["node", "vue", "react", "cassandra"],
        answer: "cassandra"
    },
    {
        question: "Which of the following scoping types does JavaScript use?",
        choices: ["sequential", "segmental", "lexical", "literal"],
        answer: "lexical"
    },
    {
        question: "Which of the following tags is used to insert a line-break in HTML?",
        choices: ["br", "a", "pre", "b"],
        answer: "br"
    }
];
// all globle variable 
var startButton = document.getElementById("start-button");
var displayInit = document.querySelector("#displayStart");
var displayQuestion = document.querySelector("#display-question");
var choicesContainer = document.querySelector("#choices");
var currentQuestionIndex = 0;
var quizTimer;
var submitted = false;
timeLeftDisplay = document.querySelector("#time-left");
//add event listener
startButton.addEventListener("click", gameStart);
//start the game after click happens
function gameStart() {
    displayInit.style.display = "none";
    showQuestion();
    startTimer();

    choicesContainer.addEventListener("click", checkAnswer);
}
//show question function is called
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
//starttimer function is called
function startTimer() {
    quizTimer = setInterval(function () {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
//if statement if time hits 0
//time interveal
        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            endGame();
        }
    }, 1000);
}
//check answer function is called
function checkAnswer(event) {
    if (event.target.matches("button")) {
        var selectedAnswer = event.target.textContent;
        var currentQuestion = questions[currentQuestionIndex];
//if statement to lose points for wrong answers
        if (selectedAnswer === currentQuestion.answer) {
            score++;
        } else {
            timeLeft -= 15;
        }

        currentQuestionIndex++;
//if statement if all the questions are done then do endgame
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }
}
//start endGame 
function endGame() {
    clearInterval(quizTimer);
    displayQuestion.textContent = "Quiz Completed!";
    choicesContainer.innerHTML = "";

    var finalScore = timeLeft;
//store highscores in localstorage
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    var finalScoreDisplay = document.createElement("p");
    finalScoreDisplay.textContent = "Final Score: " + finalScore;
    document.body.appendChild(finalScoreDisplay);

    var initialsLabel = document.createElement("label");
    initialsLabel.textContent = "Enter your initials: ";
    var initialsInput = document.createElement("input");
    initialsInput.type = "text";
    initialsInput.id = "initials-input";
    initialsLabel.appendChild(initialsInput);
    document.body.appendChild(initialsLabel);
//add submit button, and update final score
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", function () {
        if (!submitted) {
            var initials = initialsInput.value.trim();
            if (initials !== "") {
                var newScore = {
                    initials: initials,
                    score: finalScore
                };
                highScores.push(newScore);
                localStorage.setItem("highScores", JSON.stringify(highScores));
                displayHighScores();
                submitted = true;
            }
        }
    });
    document.body.appendChild(submitButton);
//start over option
    var restartButton = document.createElement("button");
    restartButton.textContent = "Start Over";
    restartButton.addEventListener("click", function () {
        location.reload();
    });
    document.body.appendChild(restartButton);

    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear Scores";
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("highScores");
        displayHighScores();
    });
    document.body.appendChild(clearButton);

    displayHighScores();
}
//run displayHighScore function to show score
function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var highScoresContainer = document.querySelector("#high-scores");
    highScoresContainer.innerHTML = "";

    highScores.forEach(function (score, index) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = "Initials: " + score.initials + " - Score: " + score.score;
        highScoresContainer.appendChild(scoreItem);
    });
//event listener for highscore
    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear Scores";
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("highScores");
        displayHighScores();
    });
    highScoresContainer.appendChild(clearButton);
}