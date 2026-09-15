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
let puntaje = 0;
let tiempoRestante = 10;
let intervaloTiempo;

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
    intervaloTiempo = setInterval(restarTiempo, 1000);
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

// ------- funcionen de movimiento para el gato ------//

function moverIzquierda() {
    if (gatoX > 0) {
        gatoX -= 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function moverDerecha() {
    if (gatoX < canvas.width - anchoGato) {
        gatoX += 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function moverArriba() {
    if (gatoY > 0) {
        gatoY -= 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function moverAbajo() {
    if (gatoY < canvas.height - altoGato) {
        gatoY += 10;
        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function detectarColision() {
    if (gatoX < comidaX + anchoComida &&
        gatoX + anchoGato > comidaX &&
        gatoY < comidaY + altoComida &&
        gatoY + altoGato > comidaY) {
            puntaje++;
            mostrarEnSpam("puntos", puntaje);
            aparecerComida();
        }
}

function aparecerComida() {
    comidaX = generarAleatorio(0, canvas.width - anchoComida);
    comidaY = generarAleatorio(0, canvas.height - altoComida);
}
function restarTiempo() {
    tiempoRestante--;
    mostrarEnSpam("tiempo", tiempoRestante);
    if (tiempoRestante <= 0) {
        alert("puntaje: " + puntaje + " ¡demasiado lento amciano 👴!, espeero que mejores la procxima vez tortuga 🐢 ");
        puntaje = 0;
        tiempoRestante = 10;
        mostrarEnSpam("puntos", puntaje);
    }
}
