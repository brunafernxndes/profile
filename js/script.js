const box = document.querySelector(".carousel");
const imagens = document.querySelectorAll(".carousel .fundo-certificado");

let contador = 0;

if (window.matchMedia("(min-width: 992px)").matches) {
    function slider() {
        contador++;
    
        if (contador > imagens.length - 1) {
            contador = 0;
        }
    
        box.style.transform = `translateX(${-contador * 370}px)`;
    }
    
    setInterval( slider , 2500 );
}