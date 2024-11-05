let what = "what";
const thisButton = document.querySelector("#thisButton");
const thatButton = document.querySelector("#thatButton");


thisButton.onclick = () => {
    thisButton.textContent = "I not AR no more :(";
    thatButton.textContent = "I now AR :3";
}

thatButton.onclick = () => {
    thisButton.textContent = "I now AR :3";
    thatButton.textContent = "I not AR no more :(";
}