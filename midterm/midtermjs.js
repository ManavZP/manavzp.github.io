// $("#unicorn").click(function() {
//     $('#backgroundImage').css("background-image", "url(bg2.gif)");
// });
window.onresize = snapTop();

function snapTop(){
    console.log(document.getElementById("warning").style.display);
    if(document.getElementById("warning").style.display === "flex"){
        window.scrollTo(0, 0);
    }
    console.log("resuzed");
}

var stage = 0;
var bong = new Audio('ding.mp3')
var counter = 0;
function ding(which){
    var symbol = document.getElementById(which);
    console.log(symbol.style.backgroundImage);
    if(symbol.style.backgroundImage === "url(\"symbol.png\")"){
        counter++;        
        symbol.style.backgroundImage = "url(" + "symbolRed.png" + ")";
    }
    if(counter === 5 && stage<1){
        document.getElementById("check").style.display = "flex"
        document.getElementById("unicorn").src="satan.png"
        bong.play();
        stage = 1;
    }
}

function popup(){
    if(stage === 1 || stage === 0){
        var person = prompt("code:", "");
    if (person === "1038" && stage === 1) {
        stage = 2;
    } else {
        window.alert("-error-")
    }
    }
}
var coolMode = false;
var currentDragX = 0;
var currentDragY = 0;
function checkCurse(){
    var img = document.getElementById("backgroundImage");
    var bg = img.style.backgroundImage;
    var button = document.getElementById("codeInput");
    var dragon = document.getElementById("drag");
//fsdfsdfs//
    if(bg === "url(\"bg.gif\")"){
        document.getElementById("work5").style.display = "none";
        document.getElementById("dragCool").style.display = "none";
        if(stage === 2){
            dragon.style.display = "flex";
            document.getElementById("work1").style.display = "flex";
        }else if(stage === 0){
            dragon.style.display = "none";
            document.getElementById("work1").style.display = "flex";
        }else if(stage === 1){
            dragon.style.display = "none";
            document.getElementById("work1").style.display = "flex";
        }

    }else if(bg === "url(\"bg2.gif\")"){
        dragon.style.display = "none";
        document.getElementById("work1").style.display = "none";
        document.getElementById("work2").style.display = "flex";
        if(stage === 0){
        
        }else if(stage === 1){
           
        }else if(stage === 2){
            document.getElementById("dragDen").style.display = "flex";
           
        }

    }else if(bg === "url(\"bg3.gif\")"){
        document.getElementById("dragDen").style.display = "none";
        document.getElementById("work2").style.display = "none";
        document.getElementById("work3").style.display = "flex";
        if(stage === 3){
            //insert link
        }else if(stage === 0){
            
        }else if(stage === 1){
    
        }else if(stage === 2){

        }

    }else if(bg === "url(\"bg4.gif\")"){
        document.getElementById("drag").style.display = "none"; 
        document.getElementById("work3").style.display = "none";
        document.getElementById("textIntro").innerHTML = "Welcome to Manav's Portfolio! Click the Unicorn to navigate through the various catagories of work. There is nothing strange about this page."
        if(stage === 0){
            document.getElementById("cursed").style.display = "none";
        }else if(stage === 1){
            document.getElementById("cursed").style.display = "flex";
        }

    }else if(bg === "url(\"bg5.gif\")"){
        document.getElementById("textIntro").innerHTML = "Welcome to Manav's Portfolio! Click the Unicorn to navigate through the various catagories of work. There is nothing strange about this site."
        document.getElementById("work4").style.display = "flex";
        document.getElementById("cursed").style.display = "none";
        if(stage === 0){
            button.style.display = "inline-block";
        }else if(stage === 1){
            button.style.display = "inline-block";
        }else if(stage === 2){
            button.style.display = "inline-block";
        }

    }else if(bg === "url(\"bg6.png\")"){
        document.getElementById("work4").style.display = "none";
        document.getElementById("work5").style.display = "flex";
        button.style.display = "none";
        if(coolMode){
            document.getElementById("dragCool").style.display = "flex";
        }

    }

    console.log(document.getElementById("drag").style.top + " " + document.getElementById("drag").style.left);
    if( parseInt(document.getElementById("drag").style.top) >= 2000){
        if(parseInt(document.getElementById("drag").style.left) >= 290 && parseInt(document.getElementById("drag").style.left) <= 330){
                coolMode = true;
                
        }
    }
}

function changeImage() {
    console.log(stage + "+" + counter);
    var img = document.getElementById("backgroundImage");
    var bottomText = document.getElementById("bottom");
    if(img.style.backgroundImage==="url(\"bg.gif\")"){
        img.style.backgroundImage = "url(" + "bg2.gif" + ")";
    }else if(img.style.backgroundImage==="url(\"bg2.gif\")"){
        img.style.backgroundImage = "url(" + "bg3.gif" + ")";
    }else if(img.style.backgroundImage==="url(\"bg3.gif\")"){
        img.style.backgroundImage = "url(" + "bg4.gif" + ")";
    }else if(img.style.backgroundImage==="url(\"bg4.gif\")"){
        img.style.backgroundImage = "url(" + "bg5.gif" + ")";
    }else if(img.style.backgroundImage==="url(\"bg5.gif\")"){
        img.style.backgroundImage = "url(" + "bg6.png" + ")";
        bottomText.style.visibility = "visible";
    }else if(img.style.backgroundImage==="url(\"bg6.png\")"){
        img.style.backgroundImage = "url(" + "bg.gif" + ")";
        bottomText.style.visibility = "collapse";
    }
}

//drag dragon

dragElement(document.getElementById("drag"));

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
    console.log(pos2)
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}