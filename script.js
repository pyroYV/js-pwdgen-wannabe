//dichiarazione variabili e richiesta all'utente tramite prompt
const userName = prompt('Please enter your name');

const userSurname = prompt('Please enter your surname');

const userColor = prompt('Please enter your favourite color in ENGLISH');
const userColor2 = prompt('Please enter your favourite least color in ENGLISH');

// stampa variabile su html id=pssw
const basePssw = document.getElementById("pssw").innerHTML = userName + userSurname + userColor;

// bonus


let psswTrimmed = (basePssw).replaceAll(/\s/g,'');
console.log(psswTrimmed)


document.getElementById("changing-color-div").style.backgroundColor = userColor;
document.getElementById("changing-color-div2").style.backgroundColor = userColor;

let leastColor = document.getElementsByClassName('changing-div')
for(i = 0; i < leastColor.length; i++) {
    leastColor[i].style.backgroundColor = userColor2 ;
  }


document.getElementById("pssw2").innerHTML = psswTrimmed;
document.getElementById("pssw3").innerHTML = psswTrimmed;

