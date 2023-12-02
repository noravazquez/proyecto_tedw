import React from 'react'
import { Link } from 'react-router-dom'

const CardLogin = () => {
  return (
    <div className="relative lg:w-1/2 h-full flex flex-col p-20 justify-between">
        <h1 className="font-primary text-2xl text-Blue1 font-semibold"><Link to={"/"}>Innovatech</Link></h1>
        <div className="w-full flex flex-col max-w-[450px]">
            <div className="w-full flex flex-col mb-5">
                <h3 className="text-4xl font-primary font-semibold mb-2">Login</h3>
                <p className="text-sm font-primary mb-3">Welcome back! Please enter your details.</p>
            </div>
            <div className="w-full flex flex-col">
                <input type="email" name="email" placeholder="Email" className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
                <input type="password" name="password" placeholder="Password" className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
            </div>
            <div className="w-full flex mt-2">
                <p className="text-sm font-primary font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot password?</p>
            </div>
            <div className="w-full flex flex-col my-4">
                <button className="w-full bg-Blue1 rounded-md p-4 text-center text-white font-primary font-semibold flex items-center justify-center">
                Log in
                </button>
            </div>
        </div>
        <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal font-primary">Dont have a account? <Link to="/register" className="font-primary font-semibold underline underline-offset-2">Sign up</Link></p>
        </div>
    </div>
  )
}

export default CardLogin