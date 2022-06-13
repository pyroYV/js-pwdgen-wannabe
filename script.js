//dichiarazione variabili e richiesta all'utente tramite prompt
const userName = prompt('Please enter your name');

const userSurname = prompt('Please enter your surname');

const userColor = prompt('Please enter your favourite color in ENGLISH');

// stampa variabile su html id=pssw
document.getElementById("pssw").innerHTML = userName + userSurname + userColor;

// bonus

const userNameTrimmed = userName.replaceAll(/\s/g,'');
const userSurnameTrimmed = userSurname.replaceAll(/\s/g,'');
const userColorTrimmed = userColor.replaceAll(/\s/g,'');
console.log(userNameTrimmed);

document.getElementById("changing-color-div").style.backgroundColor = userColor;


document.getElementById("pssw2").innerHTML = userNameTrimmed + userSurnameTrimmed + userColorTrimmed;
console.log(userNameTrimmed,userSurnameTrimmed,userColorTrimmed)