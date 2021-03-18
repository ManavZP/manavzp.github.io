// $("#unicorn").click(function() {
//     $('#backgroundImage').css("background-image", "url(bg2.gif)");
// });

var stage = 0;
var bong = new Audio('ding.mp3')
var counter = 0;
function ding(which){
    var symbol = document.getElementById(which);
    console.log(symbol.style.backgroundImage);
    if(symbol.style.backgroundImage === "url(\"symbol.png\")"){
        counter++;
        bong.play();
        
        symbol.style.backgroundImage = "url(" + "symbolRed.png" + ")";
    }
    if(counter === 5 && stage<1){
        document.getElementById("check").style.display = "flex"
        document.getElementById("unicorn").src="satan.png"
        stage = 1;
    }
}

function popup(){
    if(stage === 1){
        var person = prompt("code:", "");
    if (person === "1038") {
        stage = 2;
    } else {
        window.alert("-error-")
    }
    }
    
    
    
}

function checkCurse(){
    var img = document.getElementById("backgroundImage");
    var button = document.getElementById("codeInput");
    dragElement(document.getElementById("drag"));
    if(stage >= 1 && img.style.backgroundImage==="url(\"bg4.gif\")"){
        document.getElementById("cursed").style.display = "flex";
    }else if(stage >= 1 && img.style.backgroundImage==="url(\"bg5.gif\")"){
        button.style.display = "inline-block";
        document.getElementById("cursed").style.display = "none";
    }else if(stage >= 2 && img.style.backgroundImage==="url(\"bg.gif\")"){
        // document.getElementById("drag").style.display = "flex";
        
    }
    else{
        document.getElementById("cursed").style.display = "none";
        button.style.display = "none";
        // document.getElementById("drag").style.display = "none";
    }
}

function changeImage() {
    console.log(document.getElementById("drag"))
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