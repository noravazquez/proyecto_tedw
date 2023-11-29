import React from 'react'
import { Helmet } from 'react-helmet'
import ImagenRegister from './ImagenRegister'
import CardRegister from './CardRegister'

const Register = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Register</title>
      </Helmet>
      <div className="h-screen w-full flex items-start overflow-x-hidden">
        {/*Register card */}
        <CardRegister />
        {/*Imagen */}
        <ImagenRegister />
      </div>
    </>
  )
}

export default Register