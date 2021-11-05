import React from "react";

export const ListMascota = () => {
    return (
        <div>
            <h3>Lista de Mascotas</h3>

            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Dueño</th>
                    <th>Edad</th>
                    <th>Acción</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Luis</td>
                        <td>Heidy</td>
                        <td>23</td>
                        <td>
                            <input type="submit" value="Editar"></input>
                            <input type="submit" value="Eliminar"></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}