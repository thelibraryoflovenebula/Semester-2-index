//INPUTS
    const canvas = document.querySelector("#confetti");
    const jsConfetti = new JSConfetti(); //jsConfetti.addConfetti();
    let lilyCol = document.getElementById("lilyCol");
    let basCol = document.getElementById("basCol");
    let jasCol = document.getElementById("jasCol");
    
    let lilyButton = document.getElementById("lilyClick");
    let basButton = document.getElementById("basClick");
    let jasButton = document.getElementById("jasClick");
    let timeButton = document.getElementById("submitTime");

    let randomButton = document.getElementById("randomAll");

    // CLASSES
    let allbuttons = document.getElementsByClassName("buttonshi");
    let allimage = document.getElementsByClassName("imageshi");


//OUTPUTS
    let lilyCountOut = document.getElementById("lilyCount");
    let basCountOut = document.getElementById("basCount");
    let jasCountOut = document.getElementById("jasCount");
    let totalCountOut = document.getElementById("total");
    let validate = document.getElementById("valid");
    let showMax = document.getElementById("showMax");
    let winOut = document.getElementById("winCount");


//VARIABLES
    let lilyCounter = 0;
    let lilyRotate = 0;
    let basCounter = 0;
    let basRotate = 0;
    let jasCounter = 0;
    let jasRotate = 0;

    let totalCounter = 0;
    let refreshTimer = 7000; //DEFAULT VALUE IS 7 SECONDS

    let megaWin = false; //default at false
    let winCounting = 0;


    //ARRAY FOR PICTURES
    const pic = [["1LILY/lily1.png", "1LILY/lily2.png", "1LILY/lily3.png"], ["2BASQ/jean.png", "2BASQ/jean2.png", "2BASQ/jean3.png"], ["3JASMINE/angry.png", "3JASMINE/sad.png", "3JASMINE/sulk.png"]];

    let updateTotal = function update() {
        totalCounter = lilyCounter + basCounter + jasCounter;
        totalCountOut.innerHTML = totalCounter;
    }


//INPUT VALIDATION 
let damn = "Max time: " + refreshTimer + "ms";
showMax.innerHTML = damn;

    let outputMax = function showThing() {
        showMax.innerHTML = "Max time: " + refreshTimer;
    }


let validater = function val() {

    let enterTime = Number(document.getElementById("enterTime").value); //refresh time input

    let error = "Please enter correct input";
    let validated = "Done!"

    if (Number.isInteger(enterTime)) {
        if (enterTime >= 500 && enterTime <= 10000) {
            validate.innerHTML = validated;
            validate.className = "goodText";
            refreshTimer = enterTime;

            resetT(); //reset if everything is in order
            outputMax();
        }
        else {
            validate.innerHTML = error;
            validate.className = "errorText"
        }
    }
    else { //IF IT IS NOT AN INTEGER
        validate.innerHTML = error;
        validate.className = "errorText"
    }

}





timeButton.addEventListener("click", validater);








//FUNCTIONS
    //choose from 1,2,3 randomly function
    let threePick = function threePick(){
        let chosen = Math.floor(Math.random()*3 + 1);
        return chosen;
    }

    //lily choose
    let chooseLily = function lilyPick() {
        let pick = threePick();
        if (pick == 1 ) { //pick 1
            lilyCol.src = pic[0][0];
        }
        else if (pick == 2) { //pick 2
            lilyCol.src = pic[0][1];
        }

        else if (pick == 3) { //pick 3
            lilyCol.src = pic[0][2];
        }
    }
    //basquiat choose
    let chooseBas = function basPick() {
        let pick = threePick();
        if (pick == 1 ) { //pick 1
            basCol.src = pic[1][0];
        }
        else if (pick == 2) { //pick 2
            basCol.src = pic[1][1];
        }

        else if (pick == 3) { //pick 3
            basCol.src = pic[1][2];
        }
    }
    //jasmine choose
    let chooseJas = function jasPick() {
        let pick = threePick();
        if (pick == 1 ) { //pick 1
            jasCol.src = pic[2][0];
        }
        else if (pick == 2) { //pick 2
            jasCol.src = pic[2][1];
        }

        else if (pick == 3) { //pick 3
            jasCol.src = pic[2][2];
        }
    }

    






//CLICK  and CHANGE FUNCTIONS
    //check first 

    let addwin = function add(win) {
        winCounting += win;
        winOut.innerHTML = winCounting;

    }

    let checkMegaWin = function check2() {
        if ((lilyCol.src == basCol.src) && (basCol.src == jasCol.src)) {
            megaWin = true;
            jsConfetti.addConfetti({
                confettiRadius: 6,
                confettiNumber: 500,
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            });
            addwin(3);
        }

    }

    let checkwin = function check() {
        if (megaWin == true) {
            return;
        }

        if ((lilyCol.src == basCol.src) && (basCol.src == jasCol.src)) {
            jsConfetti.addConfetti({
                confettiRadius: 5,
                confettiNumber: 1000,
                
            });
            addwin(1);
        }
    }





    //LILY 
    let changeLily = function change1() {
        let randomTemp1 = Math.floor(Math.random()*3);
        let randomTemp2 =  Math.floor(Math.random()*3);
        lilyCol.src = pic[randomTemp1][randomTemp2]; //choose a random image from the array
        lilyCol.style.transition = "transform 1s ease";

        lilyRotate += 360;
        lilyCol.style.transform = "rotate(" + lilyRotate + "deg)";
    }
    let clickLily = function click1() {
        changeLily();
        lilyCounter++;
        lilyCountOut.innerHTML = lilyCounter;
        updateTotal();
        resetT();
        checkwin();
    }




    //BASQUIAT
    let changeBas = function change2() {
        let randomTemp1 = Math.floor(Math.random()*3);
        let randomTemp2 =  Math.floor(Math.random()*3);
        basCol.src = pic[randomTemp1][randomTemp2]; //choose a random image from the array
        basCol.style.transition = "transform 1s ease";

        basRotate += 360;
        basCol.style.transform = "rotate(" + basRotate + "deg)";
    }
    let clickBas = function click2() {
        changeBas();

        basCounter++;
        basCountOut.innerHTML = basCounter;
        updateTotal();
        resetT();
        checkwin();
    }


    //JASMINE
    let changeJas = function change3() {
        let randomTemp1 = Math.floor(Math.random()*3);
        let randomTemp2 =  Math.floor(Math.random()*3);
        jasCol.src = pic[randomTemp1][randomTemp2]; //choose a random image from the array
        jasCol.style.transition = "transform 1s ease";

        jasRotate -= 360;
        jasCol.style.transform = "rotate(" + jasRotate + "deg)";
    }
    let clickJas = function click3() {
        changeJas();

        jasCounter++;
        jasCountOut.innerHTML = jasCounter;
        updateTotal();
        resetT();
        checkwin();
    }





//AUTOMATIC REFRESH TIMER

    let refresh = function refreshImage() {
        changeLily();
        changeBas();
        changeJas();


    }

    let randomize = function random() {

    changeLily();
    changeBas();
    changeJas();

    lilyCounter++;
    basCounter++;
    jasCounter++;

    lilyCountOut.innerHTML = lilyCounter;
    basCountOut.innerHTML = basCounter;
    jasCountOut.innerHTML = jasCounter;

    updateTotal();
    resetT();

    checkMegaWin();

    if (megaWin == false) {
        checkwin();
    }
}


//timer
//SETUP
    let outputClock = document.getElementById("timerShow");
    let currentMil = 0;
    let currentSec = 0;

    //get 4 points (calculate for 2)
    outputClock.className = "phase1";//start

    let changeColor = function() {
        let phaseLength = refreshTimer / 3;
        let pointA = 0;
        let pointB = phaseLength*1;
        let pointC = phaseLength*2;
        let pointD = refreshTimer;

        if ((currentMil >= pointA) && (currentMil < pointB)) {
            outputClock.className = "phase1";
        }

        else if ((currentMil >= pointB) && (currentMil < pointC)) {
            outputClock.className = "phase2";
        }

        if ((currentMil >= pointC) && (currentMil < pointD)) {
            outputClock.className = "phase3";
        }
    }


    let updateClock = function updateClockshi(refreshTimerV){
        let maxSec = Math.floor(refreshTimerV / 1000); //A 
        let maxMil =  refreshTimerV - (maxSec*1000) //BCD 
        

        currentMil += 100;
        let showMil = Math.floor((currentMil % 1000) / 100);
        if (currentMil % 1000 == 0) {
            showMil = 0;
            currentSec += 1;
        }

        if ((currentMil > refreshTimerV)) {
            showMil = 0;
            currentMil = 0;
            currentSec = 0;
        }
        outputClock.innerHTML = currentSec + "." + showMil;

        
        changeColor();
    }  
    let updateClockTimer = function () {
        updateClock(refreshTimer);
    }


    //RESET FUNCTIONS 
    let resetClock = function resetClockshi() {
        currentMil = 0;
        currentSec = 0;
    }
    let refreshing = setInterval(refresh, refreshTimer);
    let resetT = function reset() {
        clearInterval(refreshing);
        refreshing = setInterval(refresh, refreshTimer);
        resetClock();
    }



//VISUAL
    setInterval(updateClockTimer, 100);
    outputClock.innerHTML = "0.0";

    let celebrate = function cel() {

    }










chooseLily();
chooseBas();
chooseJas();





















//EVENT HANDLERS AT THE VERY BOTTOM
lilyButton.addEventListener("click", clickLily);
lilyCountOut.innerHTML = lilyCounter;

basButton.addEventListener("click", clickBas);
basCountOut.innerHTML = basCounter;

jasButton.addEventListener("click", clickJas);
jasCountOut.innerHTML = jasCounter;

randomButton.addEventListener("click", randomize);
totalCountOut.innerHTML = totalCounter;

winOut.innerHTML = winCounting;



