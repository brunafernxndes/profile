const box = document.querySelector(".carrossel");
const imagens = document.querySelectorAll(".carrossel .fundo-certificado");

let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 200}px)`;
}

setInterval( slider , 1800 );