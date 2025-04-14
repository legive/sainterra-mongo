const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser'); // Importar el middleware de validación

// Usar el middleware para validar las rutas PUT y DELETE
//router.use(validateUser);

// Ruta para obtener todos los usuarios
router.get('/', userController.getAllUsers);
// Ruta GET para obtener un usuario por su ID

router.get('/:id', userController.getUserById);  // Ruta para obtener un usuario por ID


// Ruta para actualizar un usuario por id
router.put('/:id', userController.updateUserById);


// Ruta para eliminar un usuario por id
router.delete('/:id', userController.deleteUserById);

module.exports = router;
