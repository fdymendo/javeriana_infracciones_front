import React, { useState } from 'react';
import '../styles/Infraccion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { callApi } from '../utils/RestFetch';
import { prod } from '../utils/DateUtils';

export default function Infraccion() {

    const [plate, setPlaca] = useState('')
    const [name, setNombre] = useState('')
    const [surname, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [typeDocument, setTipoDoc] = useState('')
    const [document, setNumero] = useState('')
    const [id, setTipoInf] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            vehicle: { plate },
            parkingLot: {
                "id": "dfcae462-283f-4bb6-a9e3-7cfddfde9fcc"
            },
            typeInfraction: { id },
            user: {
                name,
                surname,
                email,
                typeDocument,
                document
            }
        }
        callApi(prod + "/infraccion/v1/placa", data, "POST", null).then(() => {
            toast.success("Infraccion guardada satisfactoriamente");
        }).catch(() => {
            toast.error("Error en el envio de placa para registro de infracción");
        })
    }



    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <h1 className='h1'>Registrar Infracción vehicular</h1>

                        <input id="nombretxt" type="text" placeholder='Nombre infractor' onChange={(event) => setNombre(event.target.value)} />
                        <input id="apellidotxt" type="text" placeholder='Apellidos infractor' onChange={(event) => setApellido(event.target.value)} />
                        <input id="emailtxt" type="text" placeholder='Email infractor' onChange={(event) => setEmail(event.target.value)} />
                        <input id="placatxt" type="text" placeholder='Placa vehiculo' onChange={(event) => setPlaca(event.target.value)} />
                        <label title='Tipo de documento'>Seleccione tipo de infración</label>
                        <select id="inftxt" onChange={(event) => setTipoInf(event.target.value)} >
                            <option disabled selected value> Seleccione una opción </option>
                            <option name="Riesgo al volante">84c9dcbc-bae4-4fef-aa46-77541656cf95</option>
                        </select>
                        <label title='Tipo de documento'>Seleccione tipo de documento</label>
                        <select id="doctxt" onChange={(event) => setTipoDoc(event.target.value)} >
                            <option disabled selected value> Seleccione una opción </option>
                            <option name="Cedula de ciudadania">CC</option>
                            <option name="Identidad">TI</option>
                            <option name="Pasaporte">PA</option>
                        </select>
                        <input id="iddoctxt" type="text" placeholder='Numero de documento' onChange={(event) => setNumero(event.target.value)} />
                        <button id="btnreg" className='btn'>Enviar Registro</button>
                    </form>
                </div>
            </div>
            <ToastContainer position='bottom-center' />
        </section>
    )
}