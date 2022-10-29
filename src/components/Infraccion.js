import React, { useState } from 'react';
import './Infraccion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Infraccion() {

    const [plate, setPlaca] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            vehicle: { plate }
        }
        console.log(JSON.stringify(data));
        fetch('http://localhost:8081/infraccion/v1/placa', { method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(data) })
            .then((response) => {
                if (response.ok) {
                    toast.success("Infraccion guardada satisfactoriamente");
                    return response.json();
                }
            })
            .catch(error => {
                toast.error("Error al guardar placa para registro de infracción");
                console.log(error);
            })
    }

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <h1 className='h1'>Registrar Infracción a placa registrada</h1>
                        <input type="text" placeholder='placa vehiculo' onChange={(event) => setPlaca(event.target.value)} />
                        <button className='btn'>Enviar Registro</button>
                    </form>
                </div>
            </div>
            <ToastContainer position='bottom-center'/>
        </section>
    )
}