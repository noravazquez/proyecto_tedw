import React from 'react'
import register from '/images/register.png'

const ImagenLogin = () => {
  return (
    <div className="relative hidden lg:w-1/2 w-1/2 h-full lg:flex">
        <div className="absolute top-44 left-36 flex flex-col">
            <h1 className="text-4xl text-white font-primary font-bold my-4">Join the tech revolution!</h1>
            <p className="text-xl text-white font-primary font-normal">Create your account and step into a world of innovation and convenience.</p>
        </div>
        <img src={register} alt="Register image" className="w-full h-full object-cover"/>
    </div>
  )
}

export default ImagenLogin