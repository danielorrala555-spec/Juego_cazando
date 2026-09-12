const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const anchoGato = 100;
const altoGato = 60;
const anchoComida = 80;
const altoComida = 80;
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}
function iniciarJuego() {
    comidaX = canvas.width - anchoComida;
    comidaY= canvas.height - altoComida;
    gatoX = canvas.width / 2 - anchoGato / 2;
    gatoY = canvas.height / 2 - altoGato / 2;
    graficarGato();
    graficarComida();
}
function graficarGato(){
    graficarRectangulo(gatoX, gatoY, anchoGato, altoGato, '#8a64db');
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, anchoComida, altoComida, '#d14040');
}