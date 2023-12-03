import React from 'react'
import { Helmet } from 'react-helmet'
import ImagenLogin from './ImagenLogin'
import CardLogin from './CardLogin'
import BreadCrumb from '../../../components/BreadCrumb'

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Login</title>
      </Helmet>
      <BreadCrumb title="Login"/>
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