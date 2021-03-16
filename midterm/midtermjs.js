// $("#unicorn").click(function() {
//     $('#backgroundImage').css("background-image", "url(bg2.gif)");
// });





function changeImage() {
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

//drag unicorn

// dragElement(document.getElementById("unicorn"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }