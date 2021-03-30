var theBackground = document.getElementById("thebackground");

var buttonMain = document.getElementById("mainButton");


function disco(){

    var randomColor = rgb(Math.random()*255, Math.random()*255, Math.random()*255);
    console.log(randomColor);

    theBackground.style.backgroundColor = randomColor;


}

function rgb(r, g, b){
    return "rgb("+r+", "+g+", "+b+")";
}