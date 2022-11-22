import React, { useState } from 'react';
import '../styles/Login.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { callLoginApi } from '../utils/RestFetch';
import { useNavigate } from 'react-router-dom';
import { prod } from '../utils/DateUtils';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const heads = {
      email: email,
      pwd: pwd
    }
    callLoginApi(prod + "/usuarios/v1/login", heads)
      .then((result) => {
        navigate("/infraccion");
      }).catch((result => {
        toast.error("Credenciales erroneos, intentelo nuevamente");
        console.log(result);
      }))
  }

  return (
    <section>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Ingreso al portal de infracciones</h3>
            <div className="form-group mt-3">
              <label>Correo o nombre de usuario</label>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="form-control mt-1"
                placeholder="Ingrese correo"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                onChange={(event) => setPwd(event.target.value)}
                className="form-control mt-1"
                placeholder="Ingrese contraseña"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position='bottom-center' />
    </section>
  )
}