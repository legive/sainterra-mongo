const User = require('../models/userModel');

// Función para obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los usuarios', details: err.message });
    }
};


module.exports = {
    getAllUsers,

};
