import React from 'react'
import { Helmet } from 'react-helmet'
import ImagenLogin from './ImagenLogin'
import CardLogin from './CardLogin'
import BreadCrumb from '../../../components/BreadCrumb'
import Alert from '../../../components/Alert'

const Login = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message');

  const alert = {
    mainColor: 'bg-green-200',
    secondaryColor: 'border-green-700',
    title: 'Success',
    text: message
  }

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
        {/*Login card*/}
        <CardLogin />
        {message && (
          <Alert alert={alert}/>
        )}
      </div>
    </>
  )
}

export default Login