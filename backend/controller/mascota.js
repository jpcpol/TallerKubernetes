const { request, response } = require('express');
const Mascota = require('../models/mascota');

const crearMascota = async (req = request, res = response) => {  
    try {
        const mascota = new Mascota( req.body );
        await mascota.save();

        res.status(201).json({
            status: true,
            msg: 'Mascota almacenada correctamente',
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            status: false,
            msg: 'Hable con el administrador',
        });
    }
}

const verMascotas = async (req = request, res = response) => {
    const mascotas = await Mascota.find();

    res.status(201).json({
        status: true,
        mascotas
    });
}

const editarMascota = async (req = request, res = response) => {
    
    const mascotaId = req.params.id;

    try {
        const mascota = await Mascota.findById(mascotaId);

        if( !mascota ){
            return res.status(404).json({
                status: false,
                msg: 'No existe la mascota',
            });
        }

        const nuevaMascota = {
            ...req.body
        }

        const mascotaActualizada = await Mascota.findByIdAndUpdate( mascotaId, nuevaMascota, { new:true } );

        res.status(201).json({
            status: true,
            mascota: mascotaActualizada
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            status: false,
            msg: 'Hable con el administrador',
        });
    }   
    
}

const eliminarMascota = async (req = request, res = response) => {
    const mascotaId = req.params.id;

    try {
        const mascota = await Mascota.findById(mascotaId);

        if( !mascota ){
            return res.status(404).json({
                status: false,
                msg: 'No existe la mascota',
            });
        }

        await Mascota.findByIdAndDelete( mascotaId);

        res.status(201).json({
            status: true,
            msg: 'Mascota eliminada correctamente'
        });

    } catch(err) {
        console.log(err);
        res.status(500).json({
            status: false,
            msg: 'Hable con el administrador',
        });
    }   
}

module.exports = {
    crearMascota,
    editarMascota,
    eliminarMascota,
    verMascotas
}