import React from "react";
import './TableView.css';

export const TableView = () => {
    return (
        <div className="row card card-body">
            <div className="col table-view">
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
                                        <button type="submit" className="btn btn-info mx-1 btnSubmit-2"><i className="col-sm-1 col-form-label fa-solid fa-pen-to-square"/></button>
                                        <button type="submit" className="btn btn-danger mx-1 btnSubmit-2"><i className="col-sm-1 col-form-label fa-solid fa-trash-can"/></button>
                                    </div>
                                </div>                              
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}