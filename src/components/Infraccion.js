import React, {useState, useRef, useEffect } from 'react'
import './Infraccion.css'; 

export default function Infraccion() {

    const [id, setInfraccion] = useState('')
    const [userId, setUsuario] = useState('')
    const [plate, setPlaca] = useState('')
    const [createDate, setRegistro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            vehicle: { plate } 
        }
        console.log(JSON.stringify(data));
        fetch('http://localhost:8081/infraccion/v1/placa', {method: 'POST', headers: {'Content-type': 'application/json' }, body: JSON.stringify(data) })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                    <input type="text" placeholder='placa vehiculo' onChange={ (event) => setPlaca(event.target.value) }/>
                    <button className='btn'>Enviar Registro</button>
                </form>
            </div>
        </div>
    </section>
  )
}