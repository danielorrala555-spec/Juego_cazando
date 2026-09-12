const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let anchoGato = 100;
let altoGato = 60;
function graficarGato(){
    ctx.fillStyle = 'black';
    ctx.fillRect(300, 400, anchoGato, altoGato);
}