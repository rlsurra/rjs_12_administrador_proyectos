const express = require('express');
const conectarDB = require('./config/db');

//Creacion del servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Puerto de la app
const PORT = process.env.PORT || 4000

//Definir la página principal
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

//Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});