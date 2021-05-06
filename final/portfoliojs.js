var currentPage = "about"
stage=0;

function nextPage(){

    if(currentPage === "about"){
        currentPage = "websites"
        document.getElementById("work1").style.display = "none";
        document.getElementById("work2").style.display = "flex";
        console.log(currentPage + " ");
    }else if(currentPage === "websites"){
        currentPage = "games"
        document.getElementById("work2").style.display = "none";
        document.getElementById("work3").style.display = "flex";
        console.log(currentPage + " ");
    }else if(currentPage === "games"){
        currentPage = "secret"
        document.getElementById("work3").style.display = "none";
        document.getElementById("work4").style.display = "flex";
        console.log(currentPage + " ");
        if(stage===0){
            console.log("CODE: 8172"); 
         }
         if(stage === 1){
             document.getElementById("secretSection").innerHTML = "01110011 01101111 01110101 01110010 01100011 01100101 00100000 01100011 01101111 01100100 01100101 00100000 01101111 01100110 00100000 01101100 01100001 01101110 01100100 01101001 01101110 01100111 00100000 01110000 01100001 01100111 01100101"
         }if(stage === 2){
             document.getElementById("spawnedDragon").style.display = "flex";
             document.getElementById("dragonCoords").innerHTML = "01101101 01101111 01110110 01100101 00100000 01110100 01101000 01100101 00100000 01100100 01110010 01100001 01100111 01101111 01101110 00100000 01101000 01101111 01101101 01100101"

         }
    }else if(currentPage === "secret"){
        currentPage = "about"
        document.getElementById("work4").style.display = "none";
        document.getElementById("work1").style.display = "flex";
        
        
    }

}


function askCode(){
    if(stage === 0 || stage === 1){
        var answer = prompt("code:", "");
    if (answer === "8172" && stage === 0) {
        stage = 1;
    } else if(answer === "9982" && stage === 1){
        stage = 2;
    }
    else {
        window.alert("-error-")
    }
    }
}
function showHome(){
    if(stage === 2){
        window.alert("Dragon's Home: 800-820, 300-320");
    }
}

dragElement(document.getElementById("spawnedDragon"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    logPosition();
}

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



function logPosition() {
    var target = document
        .getElementById("spawnedDragon");

    console.log("X: " + target.offsetLeft + ", Y:" + target.offsetTop);

    if((target.offsetLeft >= 800) && (target.offsetLeft <= 820) && (target.offsetTop >= 300) && (target.offsetTop <= 320)){
        document.getElementById("finalStage").style.display = "inline-block"
    }
}


function openTab(){
    window.open("mainPage.html", '_blank');
    document.getElementById("name").id = "dragonsCode9982";
}