const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

//Autenticacion de usuarios
// -> api/auth
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6})
    ],
    authController.autenticarUsuario
);

module.exports = router;