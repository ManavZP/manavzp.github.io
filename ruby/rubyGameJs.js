
$(document).ready(function(){
    var gameState = "begin";

    $(function(){
        $('#answerA','#answerB').hover(function(){
            $(this).css('background-color', '#ffd476');
        })
});
    $('#answerA').click(function(){
        if(gameState === "begin"){ //question: ready to play? answer: yes
            alert("Great!");
            gameState = "room1";
            updateScreen();
        }else if(gameState === "room1"){//question: scared of dark? answer: yes
            gameState = "roomDark";
            updateScreen();
        }else if(gameState === "roomDark"){ //question: You cannot see.. Is someone is the room? ans: yes
            gameState = "bedGhost";
            updateScreen();
        }
        else if(gameState === "bedGhost"){ //question: friend arrived ans: who is that?
            gameState = "badend1";
            updateScreen();
        }
        else if(gameState === "outside"){ //question: Then someone is outside... where are they? ans: out the window
            gameState = "window";
            updateScreen();
        }
        else if(gameState === "spiderQ"){ //question: are you afraid of spiders? ans: yes
            gameState = "spiders";
            updateScreen();
        }
        else if(gameState === "spiders"){ //question: Yikes! What will you do? ans: stay still
            gameState = "goodend2";
            updateScreen();
        }
        else if(gameState === "window"){ //question: ... Do you see that? ans: I see it!
            gameState = "bedGhost";
            updateScreen();
        }
        else if(gameState === "door"){ //question: ... Do you see that? ans: What is that?!
            gameState = "badend1";
            updateScreen();
        }

        });

    $('#answerB').click(function(){
        if(gameState === "begin"){ //question: ready to play? answer: no
            alert("You must play. ");
        }
        else if(gameState === "room1"){
            gameState = "spiderQ"; //question: afraid of dark? ans: no
            updateScreen();
        }
        else if(gameState === "roomDark"){
            gameState = "outside"; //question: is someone in the room? ans: no
            updateScreen();
        }
        else if(gameState === "spiderQ"){
            gameState = "boring"; //question: are you afraid of spiders? ans: no
            updateScreen();
        }
        else if(gameState === "bedGhost"){
            gameState = "goodend1"; //question: friedn arrived ans: stay quiet
            updateScreen();
        }
        else if(gameState === "outside"){ //question: Then someone is outside... where are they? ans: behind the door
            gameState = "door";
            updateScreen();
        }
        else if(gameState === "spiders"){ //question: Yikes! What will you do? ans: Smack the spiders
            gameState = "badend2";
            updateScreen();
        }
        else if(gameState === "window",gameState === "door"){ //question: Do you see that ans: It's not real..
            gameState = "goodend1";
            updateScreen();
        }
    }); 
    //13 gamestates
    //3 gamestates complete: begin, room1, roomDark, 
    //10 gamestates left: bedGhost, badend1, goodend1, spiderQ, boring, spiders,goodend2, badend2, window, door

    function updateScreen(){
        if(gameState === "room1"){
            $('#question').text("Are you afraid of the dark?");
            $('#answerA').text("Yes");
            $('#answerB').text("No");
            
        }else if(gameState === "roomDark"){
            $('#background').css('background-image','url(Dark.png)'); //jQuery
            $('#question').text("It's hard to see... is someone in the room?");
            $('#answerA').text("Yes");
            $('#answerB').text("No");
        }
        else if(gameState === "bedGhost"){
            $('#background').css('background-image','url(Dark.png)'); //jQuery
            $('#question').text("A friend has arrived....");
            $('#answerA').text("'Who are you?!'");
            $('#answerB').text("Stay quiet..");
        }
        //TO BE COMPLETED
        else if(gameState === "badend1"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
        }
        else if(gameState === "goodend1"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
            $(this).hide();
        }
        else if(gameState === "spiderQ"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
            $('#answerA').text("'Who are you?!'");
            $('#answerB').text("Stay quiet..");
        }
        else if(gameState === "spiders"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
            $('#answerA').text("'Who are you?!'");
            $('#answerB').text("Stay quiet..");
        }
        else if(gameState === "boring"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
        }
        else if(gameState === "window"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
            $('#answerA').text("'Who are you?!'");
            $('#answerB').text("Stay quiet..");
        }
        else if(gameState === "door"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
            $('#answerA').text("'Who are you?!'");
            $('#answerB').text("Stay quiet..");
        }
        else if(gameState === "goodend2"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
        }
        else if(gameState === "badend2"){
            $('#background').css('background-image','url(Dark.png)'); //image incomplete
            $('#question').text("A friend has arrived....");
        }

    }
});