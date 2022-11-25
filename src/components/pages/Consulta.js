import React, { useState } from 'react';
import '../styles/Infraccion.css';
import '../styles/Table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { callApi } from '../utils/RestFetch';
import "react-datepicker/dist/react-datepicker.css";
import { prod } from '../utils/DateUtils';

export default function Consulta() {

    const [typeDocument, setTipoDoc] = useState('')
    const [document, setNumero] = useState('')
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        callApi(prod + "/infraccion/v1/user?cc=" + document + "&td=" + typeDocument, null, "GET", null)
            .then(response => {
                setData(response.infractions);
                console.log(data);
            }).catch(result => {
                toast.error("Error al consultar");
            })
    }

    return (
        <div>
            <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                <h1 className='h1'>Consultar infracciones por usuario</h1>
                <label title='Tipo de documento'>Seleccione tipo de documento</label>
                <select id="doctxt" onChange={(event) => setTipoDoc(event.target.value)} >
                    <option disabled selected value> Seleccione una opción </option>
                    <option name="Cedula de ciudadania">CC</option>
                    <option name="Identidad">TI</option>
                    <option name="Pasaporte">PA</option>
                </select>
                <input id="iddoctxt" type="text" placeholder='Numero de documento' onChange={(event) => setNumero(event.target.value)} />
                <button id="btnreg" className='btn'>Enviar</button>
            </form>
            <div class="table-wrapper"  >
                <table class="fl-table">
                    <tbody>
                        <tr>
                            <th>Vehiculo</th>
                            <th>Placa</th>
                            <th>Tipo de placa</th>
                            <th>Fecha de infraccion</th>
                            <th>Parqueadero</th>
                            <th>Detalle de la infracción</th>
                        </tr>
                        {
                            data?.map((infraccion, index) => (
                                <tr key={index}>
                                    <td>{infraccion.vehicle.id}</td>
                                    <td>{infraccion.vehicle.plate}</td>
                                    <td>{infraccion.vehicle.typePlate.name}</td>
                                    <td>{infraccion.createDate}</td>
                                    <td>{infraccion.parkingLot.name}</td>
                                    <td>"skadsakldjsdasadjasdksajdsaksadjksaksa"</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer position='bottom-center' />
        </div>
    );
}