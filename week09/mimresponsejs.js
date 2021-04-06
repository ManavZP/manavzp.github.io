var mainText = document.getElementById("main");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var state="text";
var myResponse = "I think this idea is even further extended to onlne interations, \
causing people to become more toxic towards others as a direct result of not being \
able to sympathize with the opposing party anymore. ";
var originalText = "In tribal societies we \
are told that it is a familiar reaction, \
when some hideous event occurs, for some people to \
say, How horrible it must be to feel like that, instead \
of blaming somebody for having done something horrible. \
This feeling is an aspect of the new mass culture we are\
 moving into—a world of total involvement in which everybody \
 is so profoundly involved with everybody else and in which\
  nobody can really imagine what private guilt can be anymore.";

function response(){
    if(state === "text"){
        mainText.innerHTML = myResponse;
        image1.style.display = "flex";
        image2.style.display = "flex";
        state="response";
    }else if(state === "response"){
        mainText.innerHTML = originalText;
        image1.style.display = "none";
        image2.style.display = "none";
        state = "text";
    }
}