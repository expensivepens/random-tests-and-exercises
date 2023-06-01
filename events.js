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
newButton.addEventListener("click", (e)=> e.target.style.backgroundColor = "blue");

score = 0;
gameDiv = document.createElement("div");
gameDiv.style.marginTop = "50px";
gameButtons = []
for (i = 0; i < 3; i++){
    gameButtons[i] = document.createElement("button");
    gameButtons[i].textContent = `Add ${i} point`;
    if(i > 1) gameButtons[i].textContent += "s";
    gameDiv.appendChild(gameButtons[i]);
}
scoreParagraph = document.createElement("p");
scoreParagraph.textContent = score;
gameDiv.appendChild(scoreParagraph);
document.body.appendChild(gameDiv);

allButtons = document.querySelectorAll("button");
allButtons.forEach((button) =>{
    button.addEventListener("click", (event)=>{
        score += +event.target.textContent.replace(/[^0-9]/g, "");
        if (score >= 100) scoreParagraph.textContent = "You win!"
        else scoreParagraph.textContent = score;
    })
})
