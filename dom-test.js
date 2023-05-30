const subContainer1 = document.querySelector(".sub-container1");  // selects the sub-container1 div using the querySelector method
// and giving a CSS selector as and argument, then places its reference into a constant
const subContainer2 = document.querySelector(".sub-container2");  // selects the sub-container2 div and places its reference into a constant
const paraOfSubContainer1 = document.createElement("p");  // uses the createElement() method to place a reference to a new <p> element into a const
const paraOfSubContainer2 = subContainer2.firstElementChild;  // uses a relational selector to select the first child element of the sub-container-2 div,
// which is a <p> element.

subContainer1.appendChild(paraOfSubContainer1);  // adds a <p> element as the last child of the sub-container1 div
document.querySelector("body").insertBefore(document.createElement("h1"), document.querySelector("#container")); // selects the <body> element and adds an <h1>
// element before the #container div (which is a child of <body>). This isn't a good way of doing it, it would be better to put all these references in their
// own constants for code clarity, but is shows the way it works. 
subContainer2.removeChild(subContainer2.lastElementChild); // removes the .remove-me paragraph from the DOM.




paraOfSubContainer2.textContent = "new paragraph";
