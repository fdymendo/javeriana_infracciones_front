import React, { useState } from 'react';
import '../styles/Infraccion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { callApi } from '../utils/RestFetch';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { prod } from '../utils/DateUtils';

export default function Citas() {

    const [typeDocument, setTipoDoc] = useState('')
    const [document, setNumero] = useState('')
    const [cita, setTipoCita] = useState('')
    const [fecha, setFecha] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const body = {
            date: fecha,
            description: cita
        }
        const header = {
            cc: typeDocument,
            td: document
        }
        callApi(prod + "/agendamiento/v1", body, "POST", header)
            .then(result => {
                toast.success("Cita registrada satisfactoriamente");
            }).catch(result => {
                toast.error("Error al registrar la cita");
            })
    }

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <h1 className='h1'>Agendar Citas</h1>
                        <label title='Tipo de documento'>Seleccione tipo de infración</label>
                        <select id="doctxt" onChange={(event) => setTipoCita(event.target.value)} >
                            <option disabled selected value> Seleccione tipo de cita</option>
                            <option name="Cita vehicular ">Cita de vehiculos</option>
                        </select>
                        <label title='Tipo de documento'>Seleccione tipo de documento</label>
                        <select id="doctxt" onChange={(event) => setTipoDoc(event.target.value)} >
                            <option disabled selected value> Seleccione una opción </option>
                            <option name="Cedula de ciudadania">CC</option>
                            <option name="Identidad">TI</option>
                            <option name="Pasaporte">PA</option>
                        </select>
                        <input id="iddoctxt" type="text" placeholder='Numero de documento' onChange={(event) => setNumero(event.target.value)} />
                        <DatePicker selected={fecha} onChange={(date) => setFecha(date)} />
                        <button id="btnreg" className='btn'>Enviar Registro</button>
                    </form>
                </div>
            </div>
            <ToastContainer position='bottom-center' />
        </section>
    )
}