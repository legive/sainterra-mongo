const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Rutas
const userRoutes = require('./routes/userRoutes');

// Configuración de la base de datos
require('./config/db');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/users', userRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
