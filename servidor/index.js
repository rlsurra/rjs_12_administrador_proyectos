const express = require('express');
const conectarDB = require('./config/db');

//Creacion del servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar express.json para leer datos que el usuario coloque. Otra opción es body parser.
app.use(express.json({extend: true}));

//Puerto de la app
const PORT = process.env.PORT || 4000

//Definir la página principal
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios')); //Cada uno de estos es un middleware

//Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});