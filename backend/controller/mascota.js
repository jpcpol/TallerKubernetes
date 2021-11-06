const { request, response } = require('express');


const crearMascota = (req = request, res = response) => {
    const { mascota, dueño, edad } = req.body;
    
    return res.json({
        
    });
}

const editarMascota = (req = request, res = response) => {
    const { id, mascota, dueño, edad } = req.body;

    return res.json({
        
    });
}

const eliminarMascota = (req = request, res = response) => {
    return res.json({
        
    });
}

const verMascotas = (req = request, res = response) => {
    return res.json({
        
    });
}

module.exports = {
    crearMascota,
    editarMascota,
    eliminarMascota,
    verMascotas
}