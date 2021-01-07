const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Creacion de un usuario
// -> api/usuarios
router.post('/',
    usuarioController.crearUsuario
);

module.exports = router;