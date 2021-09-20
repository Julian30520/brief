// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Déclaration des variables pour stocké l'heure
let date;
let heure;
let heureInSecond;
let minute;
let minuteInSecond;
let seconde;
let bufferHeure = 0;
let bufferSecond = 0;
let bufferMinute = 0;

function initHeure() {
    //Extraire l'heure actuel à l'aide de l'objet Date()
    date = new Date();
    //Stocker l'heure , minute , seconde  dans des varaiables
    heure = date.getHours();
    if(heure > 12) {
        heure = heure - 12;
    }
    minute = date.getMinutes();
    seconde = date.getSeconds();

    minuteInSecond = minute * 60;
    heureInSecond = heure * 3600;
}

function initBase() {
    AIGUILLEHR.style.transform = 'rotate(' + (heureInSecond + minuteInSecond + seconde) * 0.0083 + 'deg)';
    AIGUILLEMIN.style.transform = 'rotate(' + (minuteInSecond + seconde) * 0.1 + 'deg)';
    AIGUILLESEC.style.transform = 'rotate(' + seconde * 6 + 'deg)';

    bufferHeure = heureInSecond;
    bufferMinute = minuteInSecond;
    bufferSecond = seconde + 1;
}

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {
    initHeure();

    AIGUILLEHR.style.transform = 'rotate(' + (bufferHeure + bufferMinute + seconde) * 0.0083 + 'deg)';
    AIGUILLEMIN.style.transform = 'rotate(' + (bufferMinute + bufferSecond) * 0.1 + 'deg)';
    AIGUILLESEC.style.transform = 'rotate(' + bufferSecond * 6 + 'deg)';
    
    bufferHeure++;
    bufferMinute++;
    bufferSecond++;

}

// Exercuter la fonction chaque second
initHeure();
initBase();
var interval = setInterval(demarrerLaMontre, 1000);