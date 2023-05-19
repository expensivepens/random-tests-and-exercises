const myArray = [1, 2, 3];
myArray[2] = 10;
myArray[3] = 20;
console.log(myArray);

////////////////////////////////////////

const instruments = ["piano", "guitar", "drums", "bass"];
console.log(instruments);
instruments[3] = "bizzzasse";
console.log(instruments);
let bass = instruments[3];
console.log(bass);

/////////////////////////////////////////

const numberArray = [1, 2, 3, 4];
let sumOfNumberArray = numberArray[0] +
                       numberArray[1] +
                       numberArray[2] +
                       numberArray[3];
console.log(sumOfNumberArray); 

//////////////////////////////////////////

let sumOfNumberArrayThroughLoop = 0;
for (i = 0; i < numberArray.length; i++){
    sumOfNumberArrayThroughLoop += numberArray[i];
}
console.log(sumOfNumberArrayThroughLoop);

///////////////////////////////////////////
const arrayOfWords = ["words", "word", "ohword?"]
console.log(arrayOfWords);  // prints the actual array
console.log(arrayOfWords.toString());   // creates a string with the individual
                                        //and separates them with commas (but no spaces)
const someNumbers = [53, 65, 78];
console.log(someNumbers.toString());