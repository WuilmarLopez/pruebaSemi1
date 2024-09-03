const express = require('express');
const app = express();
const port = 3000;

// Endpoint para verificación de estado
app.get('/check', (req, res) => {
    res.sendStatus(200);
});

// Endpoint para obtener el objeto JSON
app.get('/', (req, res) => {
    res.json({
        "Instancia": "Instancia 1 - Api1",
        "Curso": "Seminario de Sistemas 1",
        "Seccion": "Sección A",
        "Periodo": "2do Semestre 2024",
        "Estudiante": "Wuilmar Hamilton López García - 201901069"
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

