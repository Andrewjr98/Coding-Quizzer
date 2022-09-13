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
var timerObj=document.querySelector("#counter");
var answerElements= document.getElementsByClassName("answerOption");
var questionElement= document.querySelector(".QuestionsPopulated");






let questionSet = {
    0: {
        text: "Commonly used data types do not include:",
        answers: {
            0: {
                text: "Alerts",
                isCorrect: true
            },
            1: {
                text: "Booleans",
                isCorrect: false
            },
            2: {
                isCorrect: false,
                text: "Numbers"
            },
            3: {
                isCorrect: false,
                text: "Strings"
            }
        }
    },
    1: {
        text: "The condition in an if/else statement is enclosed with _____",
        answers: {
            0: {
                text: "Parenthesis",
                isCorrect: true
            },
            1: {
                text: "Curly Brackets",
                isCorrect: false
            },
            2: {
                isCorrect: false,
                text: "Square Brackets"
            },
            3: {
                isCorrect: false,
                text: "Quotes"
            }
        }
    },
    2: {
        text: "Arrays in JavaScript can be used to store ______",
        answers: {
            0: {
                text: "All of the Others",
                isCorrect: true
            },
            1: {
                text: "Numbers and Strings",
                isCorrect: false
            },
            2: {
                isCorrect: false,
                text: "Other Arrays"
            },
            3: {
                isCorrect: false,
                text: "Booleans"
            }
        }
    },
    3: {
        text: "String values must be enclosed within ______ when being assigned to variables",
        answers: {
            0: {
                text: "Quotes",
                isCorrect: true
            },
            1: {
                text: "Curly Brackets",
                isCorrect: false
            },
            2: {
                isCorrect: false,
                text: "Commas"
            },
            3: {
                isCorrect: false,
                text: "Parenthesis"
            }
        }
    },
    4: {
        text: "A very useful during development and debugging for printing content to the debugger is:",
        answers: {
            0: {
                text: "Console.Log",
                isCorrect: true
            },
            1: {
                text: "JavaScript",
                isCorrect: false
            },
            2: {
                isCorrect: false,
                text: "Terminal/Bash"
            },
            3: {
                isCorrect: false,
                text: "For Loops"
            }
        }
    }
};

    function init(){
populateAnswers(1);
startGame();
}
// answerElements
function populateAnswers(questionIndex) {
    var questionPrompt= questionSet[questionIndex].text;
    var answerData=questionSet[questionIndex].answers;
    Object.keys(answerData).forEach(element => {
        // console.log(element);
        var selectedElement=answerElements[element];
        selectedElement.value=answerData[element].text;
        

    });
questionElement.innerHTML=questionPrompt
}



function startGame() {
    isCorrect= false;
    timerCount= 75;
    startButton.disabled=true;
    renderQuestion();
    startTimer();
 }
// function init(){
//     getHighscores();
//     saveHighscores();
// }
function correctAnswer(){
    correctButtons.textContent="Correct Answer"
}
function wrongButtons(){
    wrongButtons.textContent="Wrong Answer";
    timerCount = (timerCount-5<0)? 0 : timerCount-5;
}
function startTimer(){
    timer= setInterval(function(){
        timerCount-=1;
        timerObj.innerHTML=timerCount;
        if (timerCount>=0){
            if (isCorrect && timerCount >0){
                clearInterval(timer);
                getHighscores();
                gameOver();
            }
        }
        if (timerCount===0){
            clearInterval(timer);
            gameOver();
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
