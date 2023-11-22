import React from 'react'
import { Helmet } from 'react-helmet'
import BreadCrumb from '../components/BreadCrumb'

const Register = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Register</title>
      </Helmet>
      <BreadCrumb title="Register" />
      <section>
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsl(0, 0%, 96%)'}}>
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Discover the Latest in Electronics <br />
                  <span className="text-primary">Exclusive Offers Just for You</span>
                </h1>
                <p style={{color: 'hsl(217, 10%, 50.8%)'}}>
                Join us for exclusive deals on state-of-the-art electronics that empower your growth and success.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="form-outline mb-4">
                        <input type="text" id="usuario" className="form-control" />
                        <label className="form-label" for="usuario">Usuario</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="correo" className="form-control" />
                        <label className="form-label" for="correo">Correo electronico</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="contrasena" className="form-control" />
                        <label className="form-label" for="contrasena">Contraseña</label>
                      </div>

                      <button type="submit" className="btn btn-primary btn-block mb-4">
                        Sign up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register