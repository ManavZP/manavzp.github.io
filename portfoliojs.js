var currentPage = "home"
stage=0;
var w = window.innerWidth



window.onresize = snapTop();



function snapTop(){
    console.log(document.getElementById("warning").style.display);
    if(document.getElementById("warning").style.display === "flex"){
        window.scrollTo(0, 0);
    }
}

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hiddenTop")
  } else {
    backToTopButton.classList.add("hiddenTop")
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
      });
  };


  backToTopButton.addEventListener("click", goToTop)



function goToPage(page){
    currentPage = page
    if(currentPage === "design"){
        document.getElementById("work1").style.display = "none";
        document.getElementById("work2").style.display = "flex";
        document.getElementById("work3").style.display = "none";
        document.getElementById("work4").style.display = "none";
        document.getElementById("work5").style.display = "none";

    }
    else if(currentPage === "games"){
        document.getElementById("work1").style.display = "none";
        document.getElementById("work2").style.display = "none";
        document.getElementById("work3").style.display = "flex";
        document.getElementById("work4").style.display = "none";
        document.getElementById("work5").style.display = "none";


    }
    else if(currentPage === "home"){
        document.getElementById("work1").style.display = "flex";
        document.getElementById("work2").style.display = "none";
        document.getElementById("work3").style.display = "none";
        document.getElementById("work4").style.display = "none";
        document.getElementById("work5").style.display = "none";

    }
    else if(currentPage === "secret"){
        document.getElementById("work1").style.display = "none";
        document.getElementById("work2").style.display = "none";
        document.getElementById("work3").style.display = "none";
        document.getElementById("work4").style.display = "flex";
        document.getElementById("work5").style.display = "none";

        if(stage===0){
            console.log("CODE: 8172"); 
         }
        if(stage === 1){
             document.getElementById("secretSection").innerHTML = "01100011 01101100 01101001 01100011 01101011 00100000 01110100 01101000 01100101 00100000 01110011 01110000 01100001 01100100 01100101"
        }
        if(stage === 2){
             document.getElementById("spawnedDragon").style.display = "flex";
             document.getElementById("dragonCoords").innerHTML = "01110101 01110011 01100101 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 00100000 01110100 01101111 00100000 01100111 01110101 01101001 01100100 01100101 00100000 01110100 01101000 01100101 00100000 01100111 01100001 01101101 01101001 01101110 01100111 00100000 01100100 01110010 01100001 01100111 01101111 01101110 00100000 01101000 01101111 01101101 01100101"

        }
    }else if(currentPage === "otherPage"){
        document.getElementById("work1").style.display = "none";
        document.getElementById("work2").style.display = "none";
        document.getElementById("work3").style.display = "none";
        document.getElementById("work4").style.display = "none";
        document.getElementById("work5").style.display = "flex";

    }
}

function openDragon(){
    if(stage > 0){
        window.open("portfolioFinal.html", '_blank');
    }
    
}

function nextPage(){

    document.getElementById("work1").style.display = "none";
        document.getElementById("work2").style.display = "none";
        document.getElementById("work3").style.display = "none";
        document.getElementById("work4").style.display = "flex";
        document.getElementById("work5").style.display = "none";

        if(stage===0){
            console.log("CODE: 8172"); 
         }
        if(stage === 1){
             document.getElementById("secretSection").innerHTML = "01100011 01101100 01101001 01100011 01101011 00100000 01110100 01101000 01100101 00100000 01110011 01110000 01100001 01100100 01100101"
        }
        if(stage === 2){
             document.getElementById("spawnedDragon").style.display = "flex";
             document.getElementById("dragonCoords").innerHTML = "01110101 01110011 01100101 00100000 01110100 01101000 01100101 00100000 01100011 01101111 01101110 01110011 01101111 01101100 01100101 00100000 01110100 01101111 00100000 01100111 01110101 01101001 01100100 01100101 00100000 01110100 01101000 01100101 00100000 01100111 01100001 01101101 01101001 01101110 01100111 00100000 01100100 01110010 01100001 01100111 01101111 01101110 00100000 01101000 01101111 01101101 01100101";
        }
        if(stage === 3){
            document.getElementById("libraryCode").innerHTML = "A Babbling Booke - 0kjhxuuor67b06wpq4mcewv9pv7cahgahsnb8hyjb7\
            7r7k30olojy2eju3xjci2ko4gi7m3zz1p0sae61lkjvajau7iwd70hcuzt1ie4jmpepnyns1vi2qpfgfmyakppp273l1xptjh\
            1c2tj4i5dfh657vjpp8ulsio15lhjx9sea2al973ctn3uwgx7453cck9hmonnjbjka1y99rjc2br3i6zk6r7ls7lgxzdmh7djsk\
            i0k3y6dur0hjknr712t1deh0gl7ffwkxis98i0epuc06sf91olq0p6zlbz03ihuslpk249dns0tioeutzus4bjcfimupvghmp6a2a\
            2o4t5ep1gas8dbh9a2ew06wwxidjt8mrf5ybx5mvtu1c8aijopyy0fea8wq4815y37fysup3vsblpeba4pokule6tpln55vfly0oqx\
            h9p50smcfmxpquhw0o0a5zi9mzeuokgf7jkp2rygc60rgiq78lyx6v5g9bb9ukadhr9nmwxzc373tpcyx1gdn5b2wv6pegjf6y1nwx\
            m5l708z7gada4is8u0ysskzr63q3iuz5vma3z2zdl38aib2f33p46ia1uzx6gw5m6jhsvgag35ect9ta7gz9e0xzkdlbwo551qzpbo\
            382rcisz7xl6p11cdduold5n8orzgvpw1jhd2fx8r0jqbai873gjhclkd0z9fcw8c323byg9bqyu6ynccoi86r40kuuxa3xfecu9jx\
            pyfcyuo5rospws6imts545zbc90ahih7g003svspme27vps9g8dpuftcdsygizox9c87me8xw5ep3q3l07an7dz29voecsqt3473rnh\
            sr4meh2nj01wjvivhvur1l5ohsm4jizi13ad4vxq44qroh2gym215tue9bqyg7xbzswr31essltckxqi6y94afz6729t1lg4oihmklt\
            hu506sf0odjc6ksyae3appwpxnxi8ggbbd4dd2vlu380cvmdthyd82f00pykij2bov6p8zmvr5gflrpf55ccg8vdo7ffl4wfzim1j16j\
            8pith58xh4b9z9jp8jeaktoyuyqrprliwfhnmfmlcp1z9ddjzhy1qydqeyeav2nwlra7a9jjs1nygs45lnxmszwkpfqttbdydp4u77v\
            4f9k2zwaj4texyfj3a1w9hk07uhxrblpq085dqjdciax6enbj3rl4gtlvbzc5y6p4ef1guhgehflfj48a4b9vo73ioa5r9pl1q40nji3\
            7qs796avui53u0gyv6htbjzb47t4mvg9dbinnyy0tet7pgbtvrxrg92eqlc6sfz9qgdpgfgtdrab6ayha1k53kriv5pcnclzrh800vvy\
            tibflkn5xb7fv36h843ctcw59raoszhq67yzsandyqkaoq1x4vblurh5w28htv6nojfk6rd9aobngy3zlw7gbjp9lfc4zsr3iwapawqwr\
            aj9n99a7ivm1jmfcbd2b88cpdw668tm5xa9fx9rrjq5eqa3wwx79ul6kao3344o2508tl4bdjht386867b5h0ojmlnt7w9vejbpjzt95y\
            msebifdj0f7h2z9rdb1v6fv6sqcim2cjlhwm38hd7lj7pe6g1se9vqwxvyhnvob9rhp88gix5eay0wmyeeruht0hqy7kgl4qismktypix\
            l708y0vjuxgagaq04k9xkzkn2c5y7dh8x3wn1v621mn67zexibsnk8pssfkk9dnfuo9xk8rkejjxfq4xfgxi1t8fdrsxhxs1k6pyyrnm3\
            oa2brh3i6htvfywf9t4uaqwjybv3gaar0hbldrfwpk95xm55pkte17e9g7499il9ofwfpn4cz44yktyymyqpvt02jtnd6ntuk8mlxic6dv\
            qir3r1yfts8jgbf8zkour7iir27yhmtoshlbt8hoi6m7mcdyfwpvqmjq9dlic07u2d9crtgnpitswb1gc30pthhwxiuvn6h1tr4m8wslo\
            fibirq7jmfj15h4i3y3wp16xlliwc49l4h6uzpmabwiruw8bjy53tvbnha5wvtiutisk9kqi1bncp464dz9twidkf59p72nweli4hun27\
            wk6a2khxjbctiwm7lgpg20mx0fb42rtk9lsw9rtlqpw1qhcaq0kwti33aumkqgves6fvhbfi354kq5r22lv3tw8pgfqd4oley2c8hd1qh\
            lshli3nhq10pgqvfue2v36v0sjbzc8e7ryj0djwpqyyvemuoq1f9a1ya8bt9xq8x33khdsnhbg836i6zg8pw9igsvvbnxvavep68g3tusf\
            cjwa3gt2ufntufxve7fp18jzwcd51lpq7ksa7y1lxshi5b6n6x6o51p2qpwx1u1bt9kvsmqv4brw0yadve7fa6ekm7zc39yfd3bhnpnxvo\
            fq1z0ggkbwx7kh5dxnqvmcn8acrb47mutve6lj5nu04c7ybzsezoec93eu63tqhvqmbjx6ol0p2dfobia5bxyjnxifo5ack6mbyt0z2ips2\
            k8ubf68ffb1yb5rw59c1s0qsgkpkxb9tbsxyhy90a37scq5i0n2latnh7nvd981c9zs6ehhype3pu27jp506q9pisnzwyx1nt200d8t2ev0q\
            ge2katdoadccsbang7mqag06o179u0mpekbuxu7szelqxfuhe70v4wks7l1skkn8gnu6oklrzvx0wcsf9qgycguhyihjak6qjslrd2l0603y\
            yl07k27hapquyjlp08o5amlihzse3omfdwjovlzztijb8ay20f1bqgbd9aaotn58jns79q5a4xunqn14m5w0473lxdxhov7fhfgrzx7xgqi5\
            62dwvmsmvbfbiwknjv7d8b2omj9rzqnckb5dlpaxfnkle1by3qkqx5cd285ynxj6l7j5j5gnsqwduwvudselldmitsg4u9jo95basqafdub4\
            syjk33uup7gj3m9xcrlh5dlk3j2fh2hapmo80ohjw3e2d3opgcfx9oyeybrd0z9ri33xo2yu55ccv88c0brkpwynfyrpn43eift6lz19dbmsb\
            ab2j3yf76ox2j9djwuxmlpi0988n49sfoyv4aet25yayjkqxes4gi7vpltd65g97qet3zfj20ltmzyn932f8aag1n27u95pj09ao3xv3w562q\
            ycm4378b46rtkjfg7afk9y3so94rnkxd7aw363ax2iq2byxmclmgl7asz8hf5q5etna0wov3fgq8 - 1-5-16-300";
        }

}


function askCode(){
    if(stage === 0 || stage === 1 || stage === 3){
        var answer = prompt("Enter the Code:", "");
    if (answer === "8172" && stage === 0) {
        stage = 1;
    } else if(answer === "9982" && stage === 1){
        stage = 2;
    }else if(answer === "4417" && stage === 3){
        stage = 4;
    }
    else {
        window.alert("-error-")
    }
    }
}
function showHome(){
    if(stage >= 2){
        window.alert("Dragon's Home: 800-820, 300-320");
    }else{
        window.alert("You can click on pink text?");
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

//this is to display the soba chibi document.getElementById("finalStage").style.display = "inline-block"

function logPosition() {
    var target = document
        .getElementById("spawnedDragon");

    console.log("X: " + target.offsetLeft + ", Y:" + target.offsetTop);

    if((target.offsetLeft >= 800) && (target.offsetLeft <= 820) && (target.offsetTop >= 300) && (target.offsetTop <= 320)){
        stage = 3;
    }
}


function openTab(){
    window.open("mainPage.html", '_blank');
    document.getElementById("name").id = "dragonsCode9982";
}

if(w > 767.5){
    window.sr = ScrollReveal();
    sr.reveal(".ttgSec", {reset: true});
    sr.reveal(".vgSec", {reset: true});
    sr.reveal(".mmgSec", {reset: true});
}

