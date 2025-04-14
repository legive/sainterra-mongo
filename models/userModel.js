const mongoose = require('mongoose');

// Esquema de usuario
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    address: {
        city: String,
        state: String,
        country: String,
        country_code: String
    },
    card: {
        card_number: String,
        card_type: String,
        currency_code: String,
        balance: String
    },
    married_status: Boolean
});

// Crear y exportar el modelo de Mongoose
const User = mongoose.model('User', userSchema);

module.exports = User;
