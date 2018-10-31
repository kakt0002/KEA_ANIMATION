//TITLE SCREEN

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    showStart();
}

function showStart() {
    console.log("showStart");
    //vis startskærm
    document.querySelector("#start").classList.remove("show");
    //Start animation på startknap
    document.querySelector(".startknap").addEventListener("click", hideStart);
    document.querySelector(".indstillinger").addEventListener("click", hideStartButtons);

}

function hideStart() {
    console.log("hideStart");
    // Stop animation på start-knap.
    document.querySelector(".startknap").removeEventListener("click", hideStart);
    document.querySelector(".indstillinger").removeEventListener("click", hideStartButtons);
    document.querySelector(".startknap").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);

}

//START GAME

function startGame() {
    console.log("startGame");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game").classList.add("fade_in");
}



//SETTINGS SCREEN

function hideStartButtons() {
    console.log("hideStartButtons");
    document.querySelector(".startknap").removeEventListener("click", hideStart);
    document.querySelector(".indstillinger").removeEventListener("click", hideStartButtons);

    document.querySelector(".indstillinger").classList.remove("pulse");
    document.querySelector(".startknap").classList.add("fade_out");
    document.querySelector(".indstillinger").classList.add("fade_out");

    document.querySelector(".indstillinger").addEventListener("animationend", showSettings);
}


function showSettings() {
    console.log("showSettings");
    document.querySelector(".indstillinger").removeEventListener("animationend", showSettings);
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings").classList.add("fade_in");
    document.querySelector(".lukkeknap").addEventListener("click", hideSettings);
}

//BACK TO TITLE



function hideSettings() {
    console.log("hideSettings");
    document.querySelector(".lukkeknap").removeEventListener("click", hideSettings);
    document.querySelector(".lukkeknap").classList.remove("pulse");
    document.querySelector(".toggleknap1").classList.add("fade_out");
    document.querySelector(".toggleknap2").classList.add("fade_out");
    document.querySelector(".lukkeknap").classList.add("fade_out");
    document.querySelector(".lukkeknap").addEventListener("animationend", showStartButtons);
}


function showStartButtons() {
    console.log("showStartButtons");
    document.querySelector(".lukkeknap").addEventListener("animationend", showStartButtons);
    document.querySelector(".startknap").classList.add("fade_in");
    document.querySelector(".indstillinger").classList.add("fade_in");

    document.querySelector(".startknap").addEventListener("click", hideStart);
    document.querySelector(".indstillinger").addEventListener("click", hideStartButtons);

}
