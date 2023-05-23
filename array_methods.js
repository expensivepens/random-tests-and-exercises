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