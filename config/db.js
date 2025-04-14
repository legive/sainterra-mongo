const mongoose = require('mongoose');

// URL de conexión con la base de datos MongoDB
const MONGO_URI =  'mongodb://mongo:27017/sainterra';  // Usando el nombre del servicio "mongo" definido en docker-compose.yml


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos de Mongo'))
    .catch(err => console.error('Error al conectar con MongoDB:', err));
