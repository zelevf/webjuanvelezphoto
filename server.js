const express = require('express');

const server = express();


// GENERALES (SIN PARÁMETROS DE MÁS)
function validarRuta(req, res, next) {

    if (Object.keys(req.query).length > 0) {
        res.status(400);
        res.json("Parámetros de más en la ruta");
    } else {
        next();
    }
}
server.use(validarRuta);









// -----------------------------------------------------------------------

server.use((err, req, res, next) => {
    if (!err) {
        // next();
    } else {
        console.log('Error, algo salió mal', err);
        res.status(500).send('Error');
    }
});

server.listen(8080, () => console.log('Servidor iniciado, puerto 8080.'));