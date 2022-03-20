const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// Conta os segundos para marcar pontos
let segundos = 0;
function ContarSegundos() {
    document.getElementById('secs').innerHTML = segundos
    segundos++
}
setInterval(ContarSegundos, 1000);

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        // depois do time out, tira a classe jump do dino
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 300);
    }
}
var counter = 0;

let isAlive = setInterval(() => {
    let randomTime = Math.random() * 1000;

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Perdeu') 
        segundos = 0
    }

    setTimeout(isAlive, randomTime);
}, 10);

document.addEventListener("keydown", event => {
    jump();
    counter++
});