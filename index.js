//INITIALIZING THE OUTPUT FRAME 
let outputframe = document.getElementById("outputframe");







//assignment 1 typeshit
let ass1button = document.getElementById("a1tab");
let ass1 = function ass1() {
    outputframe.innerHTML = "<iframe src='assignments/a1/index.html'></iframe>";
}


//assignment 2 typeshit
let ass2button = document.getElementById("a2tab");
let ass2 = function ass2() {
    outputframe.innerHTML = "<iframe src='assignments/a2/index.html'></iframe>";
}


//assignment 3 typeshit
let ass3button = document.getElementById("a3tab");
let ass3 = function ass3() {
    outputframe.innerHTML = "<iframe src='assignments/a3/index.html'></iframe>";
}

/* USE THIS TEMPLATE TO MAKE A NEW ELEMENT AND FUNCTION 

//assignment 3 typeshit
let ass3button = document.getElementById("a3tab");
let ass3 = function ass3() {
    outputframe.innerHTML = "<iframe src='assignments/a3/index.html'></iframe>";
}
*/






//github typeshit
let githubbutton = document.getElementById("githubtab");
let github = function github() {
    outputframe.innerHTML = "<iframe src='https://github.com/thelibraryoflovenebula?tab=repositories'></iframe>";
}

//art typeshit
let artbutton = document.getElementById("arttab");
let art = function art() {
    outputframe.innerHTML = "<iframe src='https://www.lovenebula.art'></iframe>";
}


//html opener
let openhtmlbutton = document.getElementById("htmltab");
let openhtml = function openhtml() {
    const iframe = outputframe.querySelector("iframe");

    if(iframe) {
        window.open(iframe.src, "_blank");
    }
}








//MAKE SURE THESE BUTTONS GO AT THE BOTTOM
ass1button.addEventListener("click", ass1);
ass2button.addEventListener("click", ass2);
ass3button.addEventListener("click", ass3);
//MAKE NEW EVENTLISTENERS USING THIS ass3button.addEventListener("click", ass3);


//githubbutton.addEventListener("click", github); // okay so it turns out im pretty sure github turned off iframe 
artbutton.addEventListener("click", art)
openhtmlbutton.addEventListener("click", openhtml)


// if you want a specific one to be default write this at the VERY FUCKING END PATRICK 
art();