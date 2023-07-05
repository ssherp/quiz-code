//global variables
var score=0;
var timeLeft=100;
var questions = [
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        answer: 'const'
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify","parse","convert", "element"],
        answer: "stringify"
    },
    {
        question: "Which of the following is not a Javascript framework?",
        choices:["node","vue","react","cassandra"],
        answer:"cassandra"
    },
    {
        question:"Which of the following scoping type does JavaScript use?",
        choices:["sequential","segmental","lexical","literal"],
        answer:"lexical"
    }
    {
        question:"Which of the following tag is used to insert a line-break in HTML?",
        choices:["br","a","pre","b"],
        answer:"br"
    }
]
// // var questions=["what is the capital of Urugauy?","what is the capital of panama?"];
// var answerChoices =[["Manangua", "Santiago", "Monte Video", "Brasilia"],[""]]; //made of arry of strings
// // answerChoices[0][0]
//all of our selectors
var startButton= document.getElementById ("start-button");
var displayInit= document.querySelector ("#displayStart");
var displayQuestion=document.querySelector("#display-questions");
var currentQuestions=0;

//all of our selectors
var questionE1= document.querySelector("#question")
var timeEl = document.querySelector("#time")
var quizTimer;


//function
function gameStart()  {
    //trggered when they pressed button(event listener)
    //starts the timer
    
     quizTimer = setInterval(function() {
        timeLeft--;
        console.log(timeLeft);
        timeEl.textContent = "countdown: "+timeLeft;
        if (timeLeft <= 0){
          endGame();  
        }
    }, 1000);
    displayInit.style.display="none";
 //set interval
 //once the timer hits 0, call endGame function
    //hide the start button

    //reveal the option, questions 
    showQuestion();
}

function showQuestion(){
    displayQuestion.textContent=questions[0].question
    var buttonEl_1 = document.createElement('button');
    buttonEl_1.textContent = questions[0].choices[0]
    // appendChild
    choices.append(buttonEl_1)
    
    
}

function checkAnswer(){
    //triggered when the user selects any answer
    // figure out what answer the user choose
    //figure out if the answer is right or wrong
        //is its wrong, reduce the time, then show message "Wrong"
        //if its right, add that score, then show message"Correct" (time left at the end is the users score)
    //increment the current question by 1
    //change the question
    //change the choices

}

function endGame(){
    clearInterval(quizTimer)
    //triggered either when timeLeft becomes 0 or when the user finaishs all questions
    //prompts the user for a initials
    //displat the score
    //hide the question
    //if the user finishes before timer run out, stops the timer from running
}

function saveInitials(){
//triggered when the user submitted their initials
//save the scores and their initials to the local storage
    //read (save themto anther var) the existing score
    //add the new scores to the end of the arry
    //now overwrite the scores with the new aray
    //now overwite the scores with the new array
//take the user to the highScore.html page


}
//event listoner to triger to sart function
startButton.addEventListener("click",gameStart)