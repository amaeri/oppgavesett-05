const btnB = document.querySelector("#btnB");
const btnF = document.querySelector("#btnF");
const btnC = document.querySelector("#btnC");

function playBassoon() {
    bassoon.play(); 
}

function playFlute() {
    flute.play();
}

function playClarinet() {
    clarinet.play();
}


btnB.onclick = playBassoon;
btnF.onclick = playFlute;
btnC.onclick = playClarinet;