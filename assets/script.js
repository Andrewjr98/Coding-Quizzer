// var correct buttons = correct ++ points
// var fasle buttons = -- points
// timer -- seconds
// add an event listener for clicking start quiz
// correct buttons[0].addEventListener("click",function(event)){
    // event.preventDefault()
// }
// function correctQue()
// var correctButtons=document.querySelectorAll(.correct-btn)
// console.log(correctButtons)
// document.querySelector(".correct-btn").style="background-color:green"
var correctButtons= document.querySelector("#rightAnswer");
var wrongButtons= document.querySelector("#wrongAnswer");
var timerElement= document.querySelector(".timer-count");
var startButton= document.querySelector(".start");
var nextButton= document.querySelector(".next");
var viewHighscores= document.querySelector(".viewHighscores");
var timerCount;
var timer;
var highScores;
var userChoice="";
var isCorrect= false
var questions= ["Commonly used data types do not include:", "The condition in an if/else statement is enclosed with _____", "Arrays in JavaScript can be used to store ______", "String values must be enclosed within ______ when being assigned to variables","A very useful during development and debugging for printing content to the debugger is:"];
var missingWords=[];
var chosenQuestion=[];

function startGame() {
    isCorrect= false
    timerCount= 60
    startButton.disabled=true;
    renderQuestion();
    startTimer();
}
function init(){
    getHighscores();
    saveHighscores();
}
function correctAnswer(){
    correctButtons.textContent="Correct Answer"
}
function wrongButtons(){
    wrongButtons.textContent="Wrong Answer";
    timerCount=--5;
}
function startTimer(){
    timer= setInterval(function(){
        if (timerCount>=0){
            if (isCorrect && timerCount >0){
                clearInterval(timer);
                getHighscores();
                gameOver();
            }
        }
        if (timerCount===0){
            clearInterval(timer);
            gameeOver();
        }
    },1000);
}
function renderQuestion(){
    chosenQuestion= questions[Math.floor(Math.random()* questions.length)];
missingWords=chosenQuestion.split('');
blankWords=[]
for (var i=0; i<missingWords;i++){
    blankWords.push("___")
}
missingWords.textContent=blankWords.join(" ")
}
