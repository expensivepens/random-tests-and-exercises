const buttons = [];

for (i = 0; i < 2; i++){
    buttons[i] = document.createElement("button");
    buttons[i].textContent = "Method " + (i + 2);
    document.body.appendChild(buttons[i]);
}

