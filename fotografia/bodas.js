

// ------------------------------------ MOSTRAR TODAS LAS FOTOS ------------------------------------

document.addEventListener('DOMContentloaded', mostrarHTML)

function obtenerFotos() {
    const url = './bodas.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarHTML(resultado); 
        })
} 
obtenerFotos();


let fotoId = '';
let fotoActual = '';

function mostrarHTML(fotos) {
    const fotosNew = document.querySelector('.packFotos');
    fotoActual = fotos;

    fotos.forEach(fotos => {
        const foto = document.createElement('img');
        foto.src = fotos.url;
        foto.classList.add('fotoLibrary');

        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(foto);

        fotosNew.appendChild(card);


        // ------------------------------------ EVENTO MOSTRAR LA FOTO QUE CLICKEAMOS ------------------------------------

        foto.addEventListener('click', () => {
            fotoFull = fotos.url
            fotoId = fotos.id
            verificarTamanho();
            fullSizeFoto(fotos.id);
        })
    });
}

let ventanaFoto = '';

// ------------------------------------  CLICK EN LA FOTO  ------------------------------------

const imagenFull = document.createElement('img');

function fullSizeFoto() {
    const fullPhoto = document.createElement('div');
    const equis = document.createElement('div');
    ventanaFoto = document.createElement('div');

    const cerrarImagen = document.createElement('img');
    const nextImage = document.createElement('img');
    const previousImage = document.createElement('img');

    ventanaFoto.classList.add('ventanaFoto');
    
    equis.classList.add('divCerrar');
    
    
    imagenFull.src = fotoFull;
    imagenFull.classList.add('fullSizeImage');
    

    cerrarImagen.src = '../pictures/albums/cerrar.png';
    cerrarImagen.classList.add('cerrarFullSize');
    
    nextImage.src = '../pictures/albums/right-chevron.png';
    nextImage.classList.add('nextImage');
    
    previousImage.src = '../pictures/albums/left-chevron.png';
    previousImage.classList.add('previousImage');
    
    fullPhoto.classList.add('fullSizeContainer');
    fullPhoto.appendChild(imagenFull);
    
    equis.appendChild(cerrarImagen);
    
    fullPhoto.appendChild(nextImage);
    
    fullPhoto.appendChild(previousImage);
    
    
    // Insertar en el HTML 

    const ventana = document.querySelector('.contenedorFotos');
    ventana.appendChild(ventanaFoto);



    const fotoSlider = document.querySelector('.ventanaFoto');
    fotoSlider.appendChild(fullPhoto);
    fotoSlider.appendChild(equis);
    
    // console.log(fullPhoto);

    cerrarImagen.addEventListener('click', () => {
        ventanaFoto.remove();
        verificarTamanho();
    })






    // ------------------------------------  EVENTO PRÓXIMA FOTO O ANTERIOR  ------------------------------------

    nextImage.addEventListener('click', () => {
        nextFoto();
    })

    previousImage.addEventListener('click', () => {
        previousFoto();
    })






    // ------------------------------------  TAMAÑO DE FOTO  ------------------------------------

    cambiarAnchoAlto();

}





// ------------------------------------  FUNCIONES PRÓXIMA FOTO O ANTERIOR  ------------------------------------

function nextFoto() {
    verificarTamanho()
    imagenFull.src = '';
    // console.log(fotoActual.length)

    if (fotoId < fotoActual.length) {
        imagenFull.src = fotoActual[fotoId].url;
        // console.log(fotoId)
        fotoId = fotoId + 1;
        // console.log('Puede seguir subiendo')
    } else {
        // console.log('Vuelve a la primera foto')
        imagenFull.src = fotoActual[fotoId - fotoActual.length].url;
        fotoId = 1;
        // console.log(imagenFull)
    }


    // console.log(imagenFull)
}




function previousFoto() {
    verificarTamanho()
    fotoId = fotoId - 1;

    if (fotoId != 0) {      
        imagenFull.src = fotoActual[fotoId - 1].url;
        // console.log('Puede seguir bajando')
    } else {
        fotoId = fotoActual.length;
        // console.log('Vuelve a la última foto')
        imagenFull.src = fotoActual[fotoActual.length - 1].url;
    }


    // console.log(imagenFull)
}

 





// -------------------------------------- CARGA DE LA PAGINA -----------------------------------

document.addEventListener('DOMContentLoaded', () => {
    verificarTamanho();
})





// --------------------------- DETECTAR CAMBIO DE TAMAÑO DE LA PANTALLA ------------------------

window.addEventListener("resize", function(){
    verificarTamanho();
    // cambiarAnchoAlto()
});



function verificarTamanho() {
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    
    // console.log(ancho);
    // console.log(alto);


    // console.log('Verificado tamaño');
    cambiarAnchoAlto()
}


function cambiarAnchoAlto() {
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    
    // console.log(ancho);
    // console.log(alto);


    if (document.querySelector('.ventanaFoto')) {
        // console.log("Sí está la ventana");
        const fullPicture = document.querySelector('.fullSizeImage');

        if (ancho > alto) {
            // console.log("Ancho es mayor que alto");
            fullPicture.style.width = 'auto';
            fullPicture.style.height = '';
            fullPicture.style.height = '64vh';
        } else {
            // console.log("Alto es mayor que ancho");
            fullPicture.style.height = 'auto';
            fullPicture.style.width = '';
            fullPicture.style.width = '80vw';
    
        }
    } else {
        // console.log("No está la ventana");
    }


}




