//global variables
var score=0;
var timeLeft=200;
var questions=["what is the capital of Urugauy?","what is the capital of panama?"];
var answerChoices =[["Manangua", "Santiago", "Monte Video", "Brasilia"],[""]]; //made of arry of strings
// answerChoices[0][0]
var correctAnswer= []; //made of strings
var currentQuestions=0;

//all of our selectors
var questionE1= document.querySelector("#question");



//function
function start()  {
    //trggered when they pressed button(event listener)
    //starts the timer
        //set interval
        //once the timer hits 0, call endGame function
    //hide the start button
    //reveal the option, questions
}
function nextQuestion(event){
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
