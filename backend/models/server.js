//Librerías necesarias para nuestro servidor
const express = require('express');
const cors = require('cors');

// Conexión con la base de datos
const { mongoose } = require('../controller/database');

class Server {

    // Configuración inicial de nuestro servidor
    constructor() {
        this.app = express();
        this.port = 3800;
        this.mascotaPath = '/mascota';

        this.app.use(cors({
            origin: true,
            optionsSuccessStatus: 200
        }));

        this.app.use(express.json({
            limit: '10mb',
            extend: true
        }));

        this.app.use(express.urlencoded({
            limit: '10mb',
            extended: true
        }));

        this.routes();
    }

    // Rutas para manejar la información
    routes(){
        this.app.use(this.mascotaPath, require('../routes/mascota'));
    }

    // Función para que el servidor inicie a escuchar
    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutandose en el puerto: ', this.port);
        });
    }
}

module.exports = Server;