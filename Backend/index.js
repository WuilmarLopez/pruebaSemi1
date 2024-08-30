const express = require('express');
const app = express();
const port = 4000;

// Definir el endpoint raíz "/"
app.get('/', (req, res) => {
    res.send('Hola, mundo nodejs');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
