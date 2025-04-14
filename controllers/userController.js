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



const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    try {
        let user = await User.findById(userId); // Buscar el usuario por ID

        if (!user) {
            // Si el usuario no existe, crear un nuevo usuario con el ID proporcionado
            user = new User({ _id: userId, ...updateData }); // Crear un nuevo documento con los datos
            await user.save(); // Guardar el nuevo usuario
            return res.status(201).json({ message: 'Usuario creado', user });
        }

        // Si el usuario se encuentra, actualizar los campos
        Object.assign(user, updateData); // Asignar los nuevos datos al usuario
        await user.save(); // Guardar los cambios
        res.status(200).json({ message: 'Usuario actualizado', user });

    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar o crear el usuario', details: err.message });
    }
};



// Función para eliminar un usuario por ID
const deleteUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const result = await User.findByIdAndDelete(userId);

        if (!result) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado', user: result });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el usuario', details: err.message });
    }
};

module.exports = {
    getAllUsers,
    updateUserById,
    deleteUserById
};
