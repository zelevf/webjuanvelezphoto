
// -------------------------------------- CARGA DE LA PAGINA -----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    verificarTamanho();
})





// --------------------------- DETECTAR CAMBIO DE TAMAÑO DE LA PANTALLA ------------------------

window.addEventListener("resize", function(){
    verificarTamanho();
});



function verificarTamanho() {

    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    
    console.log(ancho);
    console.log(alto);



    const galeriaActiva = document.querySelector('.fullSizeImage');
    console.log(galeriaActiva)
    console.log("DESDE PHOTOSIZE");
    
    if (galeriaActiva != null) {
        console.log("Galería activa");
    } else {
        console.log("Galería inactiva");
    }

    if (ancho > alto) {
        console.log("Ancho es mayor que alto");
    } else {
        console.log("Alto es mayor que ancho");
    }
}