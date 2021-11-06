import React from "react";
import { useDispatch } from "react-redux";
import './TableView.css';

import { EditMascota } from "../EditForm/EditForm";
import { uiOpenModal } from "../../../actions/ui";

export const TableView = () => {

    const dispatch = useDispatch();

    const editItem = (e) => {
        console.log("abrir modal");
        dispatch(uiOpenModal());        
    }

    const eliminarItem = (e) => {
        console.log("eliminar mascota");
    }

    return (
        <div className="row card card-body table-view">
            <div className="col">
                <h4 className="card-title">Lista de Mascotas</h4>    
                <table className="table table-bordered table-sm">
                    <thead className="bg-green">
                        <tr>
                            <th  scope="col">Nombre</th>
                            <th  scope="col">Dueño</th>
                            <th  scope="col">Edad</th>
                            <th  scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">Luis</td>
                            <td className="text-center">Heidy</td>
                            <td className="text-center">23</td>
                            <td>
                                <div className="row">
                                    <div className="col text-center"> 
                                        <button onClick={editItem} className="btn btn-info mx-1 btnSubmit-2"><i className="col-sm-1 col-form-label fa-solid fa-pen-to-square"/></button>
                                        <button onClick={eliminarItem} className="btn btn-danger mx-1 btnSubmit-2"><i className="col-sm-1 col-form-label fa-solid fa-trash-can"/></button>
                                    </div>
                                </div>                              
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <EditMascota />
        </div>
    )
}