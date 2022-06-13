//dichiarazione variabili e richiesta all'utente tramite prompt
const userName = prompt('Please enter your name');

const userSurname = prompt('Please enter your surname');

const userColor = prompt('Please enter your favourite color in ENGLISH');
const userColor2 = prompt('Please enter your favourite least color in ENGLISH');

// stampa variabile su html id=pssw
document.getElementById("pssw").innerHTML = userName + userSurname + userColor;

// bonus

const userNameTrimmed = userName.replaceAll(/\s/g,'');
const userSurnameTrimmed = userSurname.replaceAll(/\s/g,'');
const userColorTrimmed = userColor.replaceAll(/\s/g,'');


document.getElementById("changing-color-div").style.backgroundColor = userColor;
document.getElementById("changing-color-div2").style.backgroundColor = userColor;

let leastColor = document.getElementsByClassName('changing-div')
for(i = 0; i < leastColor.length; i++) {
    leastColor[i].style.backgroundColor = userColor2 ;
  }


let finalPssw = document.getElementById("pssw2").innerHTML = userNameTrimmed + userSurnameTrimmed + userColorTrimmed;
document.getElementById("pssw3").innerHTML = userNameTrimmed + userSurnameTrimmed + userColorTrimmed;
console.log(finalPssw)
