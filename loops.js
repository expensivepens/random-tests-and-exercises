"use strict"

let initialVariable;

for(initialVariable = 0; initialVariable < 3; initialVariable++){
    console.log(initialVariable); // 0, 1, 2
}

console.log(initialVariable); // 3

////////////////////////////////////////////////////////////////

let initialVariable2 = 0;

for(; initialVariable2 < 3; initialVariable2++){
    console.log(initialVariable2); // 0, 1, 2
}

console.log(initialVariable2); // 3

////////////////////////////////////////////////////////////////

let initialVariable3 = 0;

for(; initialVariable3 < 3;){
    console.log(initialVariable3++); // 0, 1, 2
}

console.log(initialVariable3); // 3

////////////////////////////////////////////////////////////////

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       let input = prompt(`Value at coords (${i},${j})`, '');
//     }
//   }
// alert('Done!');

////////////////////////////////////////////////////////////////

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Value at coords (${i},${j})`, '');
//         if (!input){
//             break;
//         }
//     }
//   }
// alert('Done!');

//////////////////////////////////////////////////////////////////

// exit: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Value at coords (${i},${j})`, '');
//         if (!input){
//             break exit;
//         }
//     }
//   }
// alert('Done!');

///////////////////////////////////////////////////////////////////

// while(true){
//     let input = prompt("Name?");
//     if (input) break;
// }

///////////////////////////////////////////////////////////////////

let a = 0;
while (a++ < 5){  // returns 0, then increments by 1 .... returns 4, which passes the test, then increments
    console.log(a);  // logs 1, 2, 3, 4, 5
}

let b = 0;
while (++b < 5){  // increments to 1, then returns 1 ...
    console.log(b); // 1, 2, 3, 4 
}

////////////////////////////////////////////////////////////////////
function promptForGreaterThan100(){
    while(true){
        let input = prompt("Number greater than 100?");
        if (!input || input > 100){
            break;
        }
    }
}
/////////////////////////////////////////////////////////////////////
function doWhileGreaterThan100(){
    do{
       let input = prompt("Number greater than 100?");
    } while (input <= 100 && input);
}

//////////////////////////////////////////////////////////////////

function printPrimeNumbers(n){
    let listOfPrimeNumbers = "2, ";
    for (let i = 2; i <= n; i++){
        for (let j = 2; j < i; j++){
            if(i % j == 0){
                break;
            }
            if(j == i - 1){
                listOfPrimeNumbers += `${i}, `;
            }
        }
    }
    let finalResult = listOfPrimeNumbers.substring(0, listOfPrimeNumbers.length - 2) + ".";
    console.log(finalResult);
}