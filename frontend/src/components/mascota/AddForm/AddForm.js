import React, { useState } from "react";
import './AddForm.css';

export const AddForm = () => {

    const [mascota, setMascota] = useState('');
    const [dueño, setDueño] = useState('');
    const [edad, setEdad] = useState('');

    return (
        <div className="container">
            <div className="row card card-body bg-green">
                <div className="col bg-green-2 add-form">
                    <h4 className="card-title">Agregar una mascota</h4>
                    <form>
                        <div className="form-group row">
                            <i className="col-sm-1 col-form-label fa-solid fa-dog"></i>
                            <div className="col-sm-11">                                   
                                <input type="text" id="nombre" className="form-control" value={mascota} onChange={ (e) => { setMascota(e.target.value) }} placeholder="Nombre de la mascota"></input>          
                            </div>                            
                        </div>
                        
                        <div className="form-group row">
                            <i className="col-sm-1 col-form-label fa-solid fa-user"></i>
                            <div className="col-sm-11"> 
                                <input type="text" id="dueño" className="form-control" value={dueño} onChange={ (e) => { setDueño(e.target.value) }} placeholder="Nombre del dueño"></input>
                            </div>                            
                        </div>

                        <div className="form-group row">
                            <i  className="col-sm-1 col-form-label fa-solid fa-calendar"></i>
                            <div className="col-sm-9"> 
                                <input type="number" id="edad" className="form-control" value={edad} onChange={ (e) => { setEdad(e.target.value) }} placeholder="Edad de la mascota"></input>
                            </div>                
                            <label className="col-sm-2 col-form-label"> <b>Años</b></label>            
                        </div>            

                        <div className="form-group row">
                            <div className="col text-center">
                                <input type="submit" className="btn btn-success btnSubmit" value="Cargar Mascota"></input>
                            </div>                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}