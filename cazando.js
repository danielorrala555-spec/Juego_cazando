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
let colorGato = '#6728ee';
let colorComida = '#870000';

 function graficaRectangulo(x, y, ancho, alto, color) {
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
    graficaRectangulo(gatoX, gatoY, anchoGato, altoGato, colorGato);
}

function graficarComida(){
    graficaRectangulo(comidaX, comidaY, anchoComida, altoComida, colorComida);
}
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function moverIzquierda() {
    if (gatoX > 0) {
        gatoX -= 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
    }
}