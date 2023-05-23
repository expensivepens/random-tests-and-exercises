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

let sumOfNumberArrayTroughForEach2 = 0;

numberArray.forEach(addDigitsOfNumberArray2)
console.log(sumOfNumberArrayTroughForEach2);

function addDigitsOfNumberArray2(value){
    sumOfNumberArrayTroughForEach2 += value;
}

///////////////////////////////////////////
const arrayOfWords = ["words", "word", "ohword?"]
console.log(arrayOfWords);  // prints the actual array
console.log(arrayOfWords.toString());   // creates a string with the individual
                                        //and separates them with commas (but no spaces)
const someNumbers = [53, 65, 78];
console.log(someNumbers.toString());   // same thing

////////////////////////////////////////////

typeof(arrayOfWords); // returns object
typeof(arrayOfWords[1]) // returns string
typeof(someNumbers[1]) // returns number

/////////////////////////////////////////////

arrayOfWords.forEach(printAllElementsOnNewLine);

function printAllElementsOnNewLine(value){
    console.log(value);
}

//////////////////////////////////////////////

const slimShadyArray = ["Hello", "my", "name", "is", "tchiktchiki"];
let slimShadyArrayConcatenated = "";
slimShadyArray.forEach(concatenateSlimShadyArray);
console.log(slimShadyArrayConcatenated);

function concatenateSlimShadyArray(value){
    slimShadyArrayConcatenated += (value + " ");
}

///////////////////////////////////////////////

const array51 = ["Aliens"];
array51.push(" weird shit"); 
array51[2] = " ancient artefacts";
array51[array51.length] = " and hidden weapons of mass construction";
console.log(array51.toString());  // Aliens, weird shit, ancient artefacts, and hidden weapons of mass construction

////////////////////////////////////////////////

const emptyElementArray = [1, 2, 3];
emptyElementArray[5] = 4;
console.log(emptyElementArray);   // Array(6) [ 1, 2, 3, <2 empty slots>, 4 ]
console.log(emptyElementArray.toString());  // 1,2,3,,,4

/////////////////////////////////////////////////

const arrayArray = new Array(1, 2);
console.log(arrayArray.toString()); //   1,2
const arrayArrayArray = new Array(20);
console.log(arrayArrayArray.toString());  //  ,,,,,,,,,,,,,,,,,,,

//////////////////////////////////////////////////

const literalArray = [5]; // Initializes with one element containing the number 5 
const contructorArray = new Array(5); // Initializes with 5 empty elements

//////////////////////////////////////////////////

console.log(typeof literalArray);  //  object
console.log(Array.isArray(literalArray));  // true
console.log(literalArray instanceof Array);  // true

//////////////////////////////////////////////////

const arrayHooray = [1, 2, 3, 4, 5];
console.log(arrayHooray.toString());  // 1,2,3,4,5
delete arrayHooray[2]; // replaces 3 by undefined
console.log(arrayHooray.toString()); // 1,2,,4,5
console.log(typeof arrayHooray[2]); // undefined


