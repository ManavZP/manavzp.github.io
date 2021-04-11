var gameState = "begin";

var buttonOne = document.getElementById("answerA");
var buttonTwo = document.getElementById("answerB");
var question = document.getElementById("question");
var background = document.getElementById("background");

function optionAClicked(){
    if(gameState === "begin"){ //question: ready to play? answer: yes
        window.alert("Great!");
        gameState = "room1";
        updateScreen();
    }else if(gameState === "room1"){//question: scared of dark? answer: yes
        gameState = "roomDark";
        updateScreen();
    }


}





function optionBClicked(){
    if(gameState === "begin"){ //question: ready to play? answer: no
        window.alert("u suck loser, I'll give you another chance");
        gameState = "begin";
        updateScreen();
    }
}

function updateScreen(){
    if(gameState === "begin"){
        question.innerHTML = "Are you afraid of the dark?";
        buttonOne.innerHTML = "Yes";
        buttonTwo.innerHTML = "No";
        
    }
    else if(gameState === "room1"){
        question.innerHTML = "Are you afraid of the dark?";
    }else if(gameState === "roomDark"){
        background.style.backgroundColor = "black";
        question.innerHTML = "I sure hope your room is lit up..."
        buttonOne.innerHTML = "";
        buttonTwo.innerHTML = "";
    }
}

