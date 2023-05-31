const buttons = [];

for (i = 0; i < 2; i++){
    buttons[i] = document.createElement("button");
    buttons[i].textContent = "Method " + (i + 2);
    document.body.appendChild(buttons[i]);
}

buttons[0].onclick = () => alert("Method 2");

buttons[1].addEventListener("click", ()=> alert("Method 3"));
buttons[1].addEventListener("click", ()=> alert("second message"));

newDiv = document.createElement("div");
newDiv.style.marginTop = "15px";
newButton = document.createElement("button");
newButton.textContent = "New Button";
newDiv.appendChild(newButton);
document.body.appendChild(newDiv);

function alertMessage(){
    alert("This is the message");
}

newButton.addEventListener("click", alertMessage);