const express = require('express');
const app = express();
const port = 5000;

// Definir el endpoint raíz "/"
app.get('/', (req, res) => {
    res.send('Hola, mundo');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
