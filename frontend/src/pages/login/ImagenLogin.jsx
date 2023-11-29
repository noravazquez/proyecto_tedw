import React from 'react'
import login from '/images/login.png'

const ImagenLogin = () => {
  return (
    <div className="relative hidden lg:w-1/2 h-full lg:flex">
        <div className="absolute top-44 left-36 flex flex-col">
            <h1 className="text-4xl text-white font-primary font-bold my-4">Welcome back!</h1>
            <p className="text-xl text-white font-primary font-normal">Dive into the world of tech wonders with us.</p>
        </div>
        <img src={login} alt="Login image" className="w-full h-full object-cover"/>
    </div>
  )
}

export default ImagenLogin