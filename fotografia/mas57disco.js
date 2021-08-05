document.addEventListener('DOMContentloaded', mostrarHTML)

function obtenerFotos() {
    const url = './mas57disco.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarHTML(resultado)
        })
} 
obtenerFotos();

function mostrarHTML(fotos) {
    const fotosNew = document.querySelector('.packFotos');

    fotos.forEach(fotos => {
        const foto = document.createElement('img');
        foto.src = fotos.url;

        const card = document.createElement('div');
        card.classList.add('card');
        card.appendChild(foto);

        fotosNew.appendChild(card);
    });
}