const plus = document.querySelector('.plusMobile');
const navegadorMobile = document.querySelector('.navegacion');

plus.addEventListener('click', () => {

    if (navegadorMobile.style.display == 'flex') {
        navegadorMobile.style.display = 'none';
        plus.style.transform = 'rotate(0deg)';
        plus.style.transition = '.2s';
    } else {
        navegadorMobile.style.display = 'flex';
        plus.style.transform = 'rotate(45deg)';
        plus.style.transition = '.2s';
    }
})


// --------------------------- DISOLVE FOTO PORTADA ------------------------

const fotoPortada = document.querySelector(".heroCover");

window.addEventListener('scroll', () => {
    const seccionPortada = document.querySelector('.homeBody');
    const ubicacion = seccionPortada.getBoundingClientRect();

    // MOBILE 
    if (window.matchMedia("(max-width: 768px)").matches) {
        if(ubicacion.top > -370) {
            fotoPortada.style.opacity = 1;
            fotoPortada.style.transitionDuration = ".3s";
        } else {
            fotoPortada.style.opacity = 0;
            fotoPortada.style.transitionDuration = ".3s";
        };
    } 
})



