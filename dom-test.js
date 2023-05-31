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

paraOfSubContainer2.style.cssText = "color: green; font-size: 20px; font-weight: bold;";
paraOfSubContainer2.style.color = "";  // removes color style and sets it back to browser default
console.log(paraOfSubContainer2.style.color);  //  empty string
console.log(paraOfSubContainer2.style.cssText);  //  color: green; font-size: 20px; font-weight: bold;

const buttonContainer = document.createElement("div");   // creates a new div
buttonContainer.setAttribute("class", "button-container");   // sets its class attribute to "button-container"
const button = document.createElement("button"); // creates a new button
console.log(buttonContainer.getAttribute("class")); // button-container
console.log(button.getAttribute("disabled"));  // null
buttonContainer.appendChild(button);  // adds the new button element to the button-container div
document.body.appendChild(buttonContainer); // adds the button-container div(which now contains the button) to the <body>
button.setAttribute("disabled", "true");  // sets the disabled attribute of button to true
console.log(button.getAttribute("disabled"));  // true
button.removeAttribute("disabled"); // removes the disabled attribute

paraOfSubContainer2.textContent = "new paragraph";


subContainer2.removeChild(paraOfSubContainer2);
buttonContainer.removeChild(button);

redPara = document.createElement("p");
redPara.textContent = "red";
redPara.style.color = "red";
document.body.appendChild(redPara);

blueTitle = document.createElement("h3");
blueTitle.textContent = "blue H3";
blueTitle.style.color = "blue";
document.body.appendChild(blueTitle);

specialDiv = document.createElement("div");
specialDiv.style.cssText = "border: black; background-color: pink;";
divTitle = document.createElement("h1");
divTitle.textContent = "I'm in a div";
divPara = document.createElement("p");
divPara.textContent = "Me too";
specialDiv.appendChild(divTitle);
specialDiv.appendChild(divPara);
document.body.appendChild(specialDiv);
