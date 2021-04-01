var theBackground = document.getElementById("thebackground");

var buttonMain = document.getElementById("mainButton");
var numClicks = 0;
var discoMusic = new Audio("disco.mp3");

function disco(){

    //color changes
    var randomColor = rgb(Math.random()*255, Math.random()*255, Math.random()*255);
    console.log(randomColor);
    theBackground.style.backgroundColor = randomColor;

    numClicks++;

    if(numClicks === 10){
        discoMusic.play();
        buttonMain.innerHTML = "DISCO TIME!!";
        buttonMain.id = "newButton";
        theBackground.id="newBackground";
        setTimeout(stopMusic,25000); 
        numClicks = 0; 
    }


    


}
function stopMusic() {
    discoMusic.pause();
    buttonMain.id = "mainButton";
    theBackground.id="theBackground";
    buttonMain.innerHTML = "What time is it?";

}

function rgb(r, g, b){
    return "rgb("+r+", "+g+", "+b+")";
}