/*
Name: Neil Patrick Olaires, 000964569
Assignment 3: JavaScript Image Randomizer
This randomizes the image, and ive added a little bonus game in where
if you make all of the images the same it will count as a win

to run, just open the html
*/



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

    /**This function updates the total counter, and is called for every count up 
     *  its stored as "updateTotal()" and then outputs onto html
     */
    let updateTotal = function update() {
        totalCounter = lilyCounter + basCounter + jasCounter;
        totalCountOut.innerHTML = totalCounter;
    }


//INPUT VALIDATION 

let damn = "Max time: " + refreshTimer + "ms"; // this just stores the string format
showMax.innerHTML = damn; //then outputs it

//this shows what the established refresh timer is (its defaulted to 7 seconds but should update throughout whenever user changes it )
let outputMax = function showThing() {
    showMax.innerHTML = "Max time: " + refreshTimer;
}



/**This function validates user input 
 * @param {Number} enterTime - this is what the user inputs into the input text box and submits
 * @param {String}  error - stores error message -> with css
 * @param {String} validated - stores a validated message ->with css
 * 
 * 
 * 
 * 
 * 
 */
let validater = function val() {

    let enterTime = Number(document.getElementById("enterTime").value); //refresh time input

    let error = "Please enter correct input";
    let validated = "Done!"

    if (Number.isInteger(enterTime)) { //CONDITION 1: IS THE INPUT ACTUALLY AN INTEGER????
        if (enterTime >= 500 && enterTime <= 10000) {//if yes CONDITION 2: IS THE NUMBER WITHIN RANGE?
            //if yes validate and enter new refreshTimer as entered input
            validate.innerHTML = validated;
            validate.className = "goodText";
            refreshTimer = enterTime;

            resetT(); //reset time if everything is in order
            outputMax(); //outputs the new refresh timer (underneath the timer)
        }
        else {//IF IT IS NOT IN RANGE
            validate.innerHTML = error;
            validate.className = "errorText"
        }
    }
    else { //IF IT IS NOT AN INTEGER
        validate.innerHTML = error;
        validate.className = "errorText"
    }

}




//this calls the validator function everytime the submit button is clicked
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

    // this function counts wins by adding it onto the html and adding 1 to the win counter =
    let addwin = function add(win) {
        winCounting += win;
        winOut.innerHTML = winCounting;

    }

    //megawin happens when you get a win from only clicking "randomize"
    let checkMegaWin = function check2() {
        if ((lilyCol.src == basCol.src) && (basCol.src == jasCol.src)) {
            megaWin = true;
            jsConfetti.addConfetti({ //OKAY DONT KILL ME BUT THIS FUNCTION I FOUND ONLINE, I HAVE THE LINK RIGHT HERE AND YOUTUBE TUTORIAL FOR IT:  https://www.youtube.com/watch?v=tTIaA1Xmzmg&t=365s
                confettiRadius: 6,
                confettiNumber: 500,
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            }); //this just customizes the confetti
            addwin(3);
        }

    }

    //this is a standard win 
    let checkwin = function check() {
        if (megaWin == true) {
            return;
        }

        if ((lilyCol.src == basCol.src) && (basCol.src == jasCol.src)) {
            jsConfetti.addConfetti({
                confettiRadius: 5, //smaller but hey does the job
                confettiNumber: 1000,
                
            });
            addwin(1); //win counter
        }
    }




    /*
    okay so here, i hope to explain just both the change and click function for ALL three of them

    CHANGE
    1. this randomly generates a number for both array index's column/row
    2. assigns the rng into the array pic[][] to choose out of 9
    3. does styling stuff

    CLICK
    1. calls click function
    2. counts up counter and pastes current counter back into html
    3. updates total counter
    4. resets the refresh timer
    5. checks if the next generated is a win condition


    */
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

    //this stores what to refresh for future use when timer is finished
    let refresh = function refreshImage() {
        changeLily();
        changeBas();
        changeJas();
    }


    //this is FOR THE randomizer button, calls change functions and counts up
    // I wanted to just call the click function but i wanted the randomize button 
    // to check for a megaWin() condition
    //if its not megawin it will just call the normal win condition , if it is a megawin it will call that

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

    //initialize stuff first
    let outputClock = document.getElementById("timerShow");
    let currentMil = 0;
    let currentSec = 0;

    //get 4 points (calculate for 2)
    outputClock.className = "phase1";//start


    //I PUT THIS FUNCTION EARLIER BECAUSE OF PRESCENDENCY or order of importance 
    /**First it cuts the refresh timer and 
     * initilizes all the important points
     * A, B, C, D -> this is important for our critical points when making the timer change css property
     * 
     * a parameter that is important here is currentMil, which goes up
     * and this function is ALWAYS CALLED for every single new updateClock()
     * 
     */
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


    //THIS FUNCTION IS THE CREM DE LA CREM 
    /**
     * 
     * @param {*} refreshTimerV - this is just used for local variable but the only input here realistically is the user input
     * 1. initilaize the max seconds and max mil (for timer visibility) this also does some Math
     * 2. update the currentMil [NOTE: currentMil doesnt change to fit visibility, this is the only real counter since its kept untouched and is used for EVERYTHING]
     * 3. initialize and condition the showable integers, make reset at max second and max mil and display with only the tenths
     * 4. output onto html
     * 5. also change color function to check if the new currentMil hit a critical point
     */
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

    //this is weird but i had to do this to make the parameter work so this is kind of a crutch
    let updateClockTimer = function () {
        updateClock(refreshTimer);
    }


    //RESET FUNCTIONS 
    /**
     * This function is used in every refresh, or click touch
     * sets the current mil and sec to 0 (though currentSec isn't really used much in this program )
     */
    let resetClock = function resetClockshi() {
        currentMil = 0;
        currentSec = 0;
    }

    /**
     * These two functions are really imortant
     * FIRST is stored in variable to be used for clearInterval
     * SECOND is resetT which is the ACTUAL USED reset timer function for clicks, randomize, refresh
     *      - calls clearInterval for the user input (refreshTimer)
     *      - calls the resetClock which resets the currentMil timer
     *      - also refreshing is called again but its important to ACTUALLY get it back running again after clearing
     */     
    let refreshing = setInterval(refresh, refreshTimer);
    let resetT = function reset() {
        clearInterval(refreshing);
        refreshing = setInterval(refresh, refreshTimer);
        resetClock();
    }

    //IMPORTANT FOR THE VERY START
    setInterval(updateClockTimer, 100);
    outputClock.innerHTML = "0.0"; //set to zero






//on startup, it randomly chooses between the sets of pictures
chooseLily();
chooseBas();
chooseJas();





















//EVENT HANDLERS AT THE VERY BOTTOM and the buttons
//too simple that i feel lazy explaining
lilyButton.addEventListener("click", clickLily);
lilyCountOut.innerHTML = lilyCounter;

basButton.addEventListener("click", clickBas);
basCountOut.innerHTML = basCounter;

jasButton.addEventListener("click", clickJas);
jasCountOut.innerHTML = jasCounter;

randomButton.addEventListener("click", randomize);
totalCountOut.innerHTML = totalCounter;

winOut.innerHTML = winCounting;



