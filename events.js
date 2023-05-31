const buttons = [];

for (i = 0; i < 2; i++){
    buttons[i] = document.createElement("button");
    buttons[i].textContent = "Method " + (i + 2);
    document.body.appendChild(buttons[i]);
}

buttons[0].onclick = () => alert("Method 2");

buttons[1].addEventListener("click", ()=> alert("Method 3"));
buttons[1].addEventListener("click", ()=> alert("second message"));