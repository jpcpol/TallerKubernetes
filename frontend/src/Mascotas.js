import React from 'react';
import { AddMascota } from './components/AddMascota';
import { ListMascota } from './components/ListMascota';
import { EditMascota } from './components/EditMascota';

export const Mascotas = () => {
    return (
        <div>
            <h2>Mascotas</h2>
            <hr/>
            <ListMascota />
            <hr/>
            <AddMascota />
            <hr/>
            <EditMascota />
            <hr/>
        </div>        
    )
}
