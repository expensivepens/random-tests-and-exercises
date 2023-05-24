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

exit: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        if (!input){
            break exit;
        }
    }
  }
alert('Done!');

///////////////////////////////////////////////////////////////////

while(true){
    let input = prompt("Name?");
    if (input) break;
}

///////////////////////////////////////////////////////////////////
let input;
while(input == false){
    let input = prompt("Name?");
}