const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async (req, res) => {

    //Revisamos errores de validación
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    try {
        //Crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);
        //Obtenemos el usuario a partir de JWT
        proyecto.creador = req.usuario.id;
        //Guardamos el proyecto
        proyecto.save();
        res.status(200).send({msg : 'El proyecto se creo en forma exitosa'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}