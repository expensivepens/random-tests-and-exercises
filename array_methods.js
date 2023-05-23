const array1 = [1, 5, "what", "it", "is"];
console.log(array1.length);   // 5

///////////////////////////////////////////

array1String = array1.toString();
console.log(array1String);  // 1,5,what,it,is

///////////////////////////////////////////

console.log(array1.join(", ")) // 1, 5, what, it, is - notice the space after the commas
console.log(array1.join("_"));

///////////////////////////////////////////

console.log(array1.pop()); // is   (removes the last element and returns it)
console.log(array1.join(", ")); // 1, 5, what, it (the last element has been removed)

///////////////////////////////////////////

console.log(array1.push("is")); // 5 (adds the argument as an element and returns its index)
console.log(array1.join(", ")); // 1, 5, what, it, is (we've added is as a new element)

////////////////////////////////////////////

console.log(array1.shift()); // 1 (removes the first element and returns it)
console.log(array1.join(" ")); // 5 what it is(the first element has been removed)

/////////////////////////////////////////////

console.log("BREAK");
console.log(array1.unshift(1));  // 5 (adds 1 as first element, upgrades all indexes by 1 and returns the new array length)
console.log(array1.join(" ")); // 1 5 what it is (we've added 1 as the first element)
console.log(array1[3]) // it (we start counting from index 0)
console.log(array1.unshift(10)); // 6 (add 10 as first element, upgrades all indexes by 1, returns new length)
console.log(array1.join(" ")); // 10 1 5 what it is (new element has been added)
console.log(array1[3]); // what (all element index numbers have been shifted up by 1)

array1.shift(array1[3]);
console.log(array1.join(" "));

//////////////////////////////////////////////

const hotDrinks = ["coffee", "tea", "cocoa", "herbal infusions"];
const coldDrinks = ["water", "soda", "fruit juice"];
const drinks = hotDrinks.concat(coldDrinks);  
console.log("A list of drinks: " + drinks.join(", "));  // A list of drinks: coffee, tea, cocoa, herbal infusions, water, soda, fruit juice
const unevenNumbers = [1, 3, 5, 7, 9];
const evenNumbers = [2, 4, 6, 8];
const allNumbers = unevenNumbers.concat(evenNumbers);
console.log(allNumbers.join(" ")); // 1 3 5 7 9 2 4 6 8
const drinksAndNumbers = hotDrinks.concat(coldDrinks, unevenNumbers, evenNumbers);
console.log(drinksAndNumbers.join(" ")); // coffee tea cocoa herbal infusions water soda fruit juice 1 3 5 7 9 2 4 6 8
const drinksAndNumbersAndAString = drinksAndNumbers.concat("And a final string");
console.log(drinksAndNumbersAndAString.join(" ")); // coffee tea cocoa herbal infusions water soda fruit juice 1 3 5 7 9 2 4 6 8 And a final string
const drinksAndNumbersAndANumber = drinksAndNumbers.concat(6000);
console.log(drinksAndNumbersAndANumber.join(" ")); //coffee tea cocoa herbal infusions water soda fruit juice 1 3 5 7 9 2 4 6 8 6000

///////////////////////////////////////////////

const allNumbersInOrder = [];
for (i = 0; i < unevenNumbers.length ; i++){
    allNumbersInOrder.push(unevenNumbers[i]);
    allNumbersInOrder.push(evenNumbers[i]);
}
console.log(allNumbersInOrder.join(" "));

//////////////////////////////////////////////////

const arrayWithSubArray = [[0,1], [2,3], [4,5]];
console.log(arrayWithSubArray.join(", ")); // 0,1, 2,3, 4,5
const arrayWithSubArrayFlattenned = arrayWithSubArray.flat(); // extracts all the subarrays
console.log(arrayWithSubArrayFlattenned.join(", ")); // 0, 1, 2, 3, 4, 5

//////////////////////////////////////////////////

const spliceTest = ["My", "name", "Hello", "I'm", "Slim", "Shady"];
console.log(spliceTest.splice(2, 2, "is")); // Array [ "Hello", "I'm" ] (returns a new array with the removed elements)
console.log(spliceTest.join(" ")); // My name is Slim Shady

const tooManyNumbers = [1, 2, 3, 4, 5, 5, 5, 6, 7];
tooManyNumbers.splice(5, 2);
console.log(tooManyNumbers.join(" ")); // 1 2 3 4 5 6 7 (the extra 5s were removed but nothing was added in their place);

///////////////////////////////////////////////////

const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fiveToNine = oneToNine.slice(4); // starts slicing at position 4 (included), slices to the end
console.log(fiveToNine.join(" ")); // 5 6 7 8 9
const twoToSix = oneToNine.slice(1, 6); // starts slicing at position 1 (included), stops slicing at position 6 (not included in the new array)
console.log(twoToSix.join(" ")); // 2 3 4 5 6 

////////////////////////////////////////////////////
//looking for largest element in an array
const minMax = [];
let currentElement = 0;
for (let i = 0; i < 20; i++){
    minMax[i] = Math.floor(Math.random() * 100);
    currentElement = minMax[i];
    
    currentElement = Math.floor(Math.random() * 100);
    
}
console.log(minMax.join(" "));
let biggestElement = 0;
minMax.forEach(outputLargestElement);
console.log(biggestElement);

function outputLargestElement(value){
    if(value > biggestElement){
        biggestElement = value;
    }
}

