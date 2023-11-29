import React from 'react'
import { Helmet } from 'react-helmet'
import ImagenLogin from './ImagenLogin'
import CardLogin from './CardLogin'

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Login</title>
      </Helmet>
      <div className="h-screen w-full flex items-start overflow-x-hidden">
        {/*Imagen */}
        <ImagenLogin />
        {/*Login card */}
        <CardLogin />
      </div>
    </>
  )
}

export default Login