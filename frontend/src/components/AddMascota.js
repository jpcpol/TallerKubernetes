import React, { useState } from "react";

export const AddMascota = () => {

    const [mascota, setMascota] = useState('');
    const [dueño, setDueño] = useState('');
    const [edad, setEdad] = useState('');

    return (
        <form>
            <h3>Agregar una mascota</h3>
            <div>
                <label>Nombre Mascota:</label>
                <input type="text" value={mascota} onChange={ (e) => { setMascota(e.target.value) }} placeholder="Nombre de la mascota"></input>
            </div>
            
            <div>
                <label>Dueño Mascota:</label>
                <input type="text" value={dueño} onChange={ (e) => { setDueño(e.target.value) }} placeholder="Nombre del dueño"></input>
            </div>

            <div>
                <label>Edad Mascota:</label>
                <input type="number" value={edad} onChange={ (e) => { setEdad(e.target.value) }} placeholder="Edad de la mascota"></input>
            </div>            

            <div>
                <input type="submit" value="Cargar Mascota"></input>
            </div>
        </form>
    )
}