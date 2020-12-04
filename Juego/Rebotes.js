var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radiobola = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var alturaPala = 10;
var anchoPala = 75;
var paddleX = (canvas.width-anchoPala)/2;
var presionarDerecha = false;
var presionarIzquierda = false;

document.addEventListener("keydown", presionarTecla, false);
document.addEventListener("keyup", soltarTecla, false);

function presionarTecla(x) {
    if(x.keyCode == 39) {
        presionarDerecha = true;
    }
    else if(x.keyCode == 37) {
        presionarIzquierda = true;
    }
}
function soltarTecla(x) {
    if(x.keyCode == 39) {
        presionarDerecha = false;
    }
    else if(x.keyCode == 37) {
        presionarIzquierda = false;
    }
}

function dibujarBola() {
    ctx.beginPath();
    ctx.arc(x, y, radiobola, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function dibujarPala() {

    ctx.rect(paddleX, canvas.height-alturaPala, anchoPala, alturaPala);
    ctx.fillStyle = "#0095DD";
    ctx.fill();

}

function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarPala();
    dibujarBola();
    
    if(x + dx > canvas.width-radiobola || x + dx < radiobola) {
        dx = -dx;
    }
    if(y + dy < radiobola) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-radiobola) {
        if(x > paddleX && x < paddleX + anchoPala) {
            dy = -dy;
        }
        else {
            alert("HAS PERDIDO");
            document.location.reload();
        }
    }
    
    if(presionarDerecha && paddleX < canvas.width-anchoPala) {
        paddleX += 7;
    }
    else if(presionarIzquierda && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}

setInterval(dibujar, 10);