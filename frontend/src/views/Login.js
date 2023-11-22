import React from 'react'
import { Helmet } from 'react-helmet'
import BreadCrumb from '../components/BreadCrumb'

const Login = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
      </Helmet>
      <BreadCrumb title="Login" />

      <div className="d-flex justify-content-center align-items-center ">
        <div className="card">
          <div className="card-body py-5 px-md-5">
            <form>
              <div className="form-outline mb-4">
                <input type="text" id="usuario" className="form-control" />
                <label className="form-label" htmlFor="usuario">Correo electrónico</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="contrasena" className="form-control" />
                <label className="form-label" htmlFor="contrasena">Contraseña</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Login