function obtenerFotos() {
    const url = './bodas.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarHTML(resultado)
            console.log(resultado);
        })
}

// obtenerFotos();







// function fullSizeFoto() {
//     const fullPhoto = document.createElement('div');
//     const equis = document.createElement('div');
//     const imagenFull = document.createElement('img');
//     const cerrarImagen = document.createElement('img');
//     const nextImage = document.createElement('img');
//     const previousImage = document.createElement('img');

//     equis.classList.add('divCerrar');
    
//     imagenFull.src = '../pictures/albums/1bodas/3.jpg';
//     imagenFull.classList.add('fullSizeImage');
    
//     cerrarImagen.src = '../pictures/albums/cerrar.png';
//     cerrarImagen.classList.add('cerrarFullSize');
    
//     nextImage.src = '../pictures/albums/right-chevron.png';
//     nextImage.classList.add('nextImage');
    
//     previousImage.src = '../pictures/albums/left-chevron.png';
//     previousImage.classList.add('previousImage');
    
//     // fullPhoto.textContent = 'Imagen fullsize';
//     fullPhoto.classList.add('fullSizeContainer');
//     fullPhoto.appendChild(imagenFull);
    
//     equis.appendChild(cerrarImagen);
    
//     fullPhoto.appendChild(nextImage);
    
//     fullPhoto.appendChild(previousImage);
    
    
//     // Insertar en el HTML 
//     const ventana = document.querySelector('.contenedorFotos');
//     ventana.appendChild(fullPhoto);
//     ventana.appendChild(equis);
    
    
//     console.log(fullPhoto);
// }

// // fullSizeFoto();





function clickFoto() {
    const url = './bodas.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarHTML(resultado)
            console.log(resultado.id);
        })
}
