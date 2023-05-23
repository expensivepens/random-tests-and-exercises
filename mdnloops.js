"use strict"

const randomNumbers = [];

for(let i = 0; i < 20; i++){
    randomNumbers[i] = Math.floor(Math.random() * 100);
}
console.log(randomNumbers.join(" "));

for(let randomNumber of randomNumbers){
    console.log(randomNumber);
}

////////////////////////////////////////////////////

// function multiplyByTen(value){
//     return value * 10;
// }

// randomNumbersByTen = randomNumbers.map(multiplyByTen);
// console.log(randomNumbersByTen.join(" "));

/////////////////////////////////////////////////////

// function findMultiplesOfThree(value){
//     return value % 3 == 0;
// }

// randomMultiplesOfThree = randomNumbers.filter(findMultiplesOfThree);
// console.log(randomMultiplesOfThree.join(" "));

///////////////////////////////////////////////////////

let randomNumbersByTen = randomNumbers.map((value) => value * 10);
console.log(randomNumbersByTen.join(" ")); 

///////////////////////////////////////////////////////

let randomMultiplesOfThree = randomNumbers.filter((value) => value % 3 == 0);
console.log(randomMultiplesOfThree.join(" "));

////////////////////////////////////////////////////////

const favoriteSaxophonists = ["John Coltrane", "Eric Dolphy", "Zane Musa"];
let messageIntro = "The best saxophonists are ";

for (const favoriteSaxophonist of favoriteSaxophonists){
    if (favoriteSaxophonist == favoriteSaxophonists[favoriteSaxophonists.length - 1]){ // I COULD EVEN USE THE AT KEYWORD TO MAKE THIS SIMPLER
        messageIntro += "and " + favoriteSaxophonist + ".";
    } else {
        messageIntro += favoriteSaxophonist + ", ";
    }

}

console.log(messageIntro);

/////////////////////////////////////////////////////////

let forLoopMessageIntro = "The best saxophonists are ";

for(let i = 0; i <= favoriteSaxophonists.length - 1; i++){
    if(i == favoriteSaxophonists.length - 1){
        forLoopMessageIntro += "and " + favoriteSaxophonists[i] + ".";
    } else {
        forLoopMessageIntro += favoriteSaxophonists[i] + ", ";
    }
}

console.log(forLoopMessageIntro);

//////////////////////////////////////////////////////////

const listeDeContact = [
    "SAMIA:0627507867",
    "RAFAEL:0669969670",
    "PATRICK:063256484684",
    "CHRISTOPHE:0656844587",
    "CHRISTINE:03154464545",
];

let finished = false;
let recherche = prompt("Tapez le nom de la personne dont vous cherchez le numéro.").toLowerCase();
for (const contact of listeDeContact){
    const personneRecherchee = contact.split(":");
    if(personneRecherchee[0].toLowerCase() == recherche){
        console.log(personneRecherchee[1]);
        finished = true;
        break;
    } 
}
if(finished == false){
    console.log("Contact inconnu");
}