const buttons = [];

for (i = 0; i < 3; i++){
    buttons[i] = document.createElement("button");
    buttons[i].textContent = "Method " + i;
    document.body.appendChild(buttons[i]);
}

