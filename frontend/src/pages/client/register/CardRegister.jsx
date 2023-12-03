/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../../../components/Alert';

const CardRegister = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        usuario: '',
        correo: '',
        contrasena: ''
    })

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Sending data:', formData)
            const response = await fetch('http://23.20.161.84:3003/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
      
            if (response.ok) {
                const message = 'Success';
                navigate('/login?message=' + message);
            } else {
                const data = await response.json();
                setError(data.error)
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    }
  return (
    <div className="relative lg:w-1/2 h-full flex flex-col p-20 justify-between">
        <h1 className="font-primary text-2xl text-Blue1 font-semibold"><Link to={"/"}>Innovatech</Link></h1>
        <div className="w-full flex flex-col max-w-[450px]">
            <div className="w-full flex flex-col mb-5">
                <h3 className="text-4xl font-primary font-semibold mb-2">Sign up</h3>
                <p className="text-sm font-primary mb-3">Welcome! Please enter your details.</p>
            </div>
            <div className="w-full flex flex-col">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="usuario" placeholder="Username" value={formData.usuario} onChange={handleChange} className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
                    <input type="email" name="correo" placeholder="Email" value={formData.correo} onChange={handleChange}  className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
                    <input type="password" name="contrasena" placeholder="Password" value={formData.contrasena} onChange={handleChange}  className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
                    <div className="w-full flex flex-col my-4">
                        <button type='submit' className="w-full bg-Blue1 rounded-md p-4 text-center text-white font-primary font-semibold flex items-center justify-center">
                            Sign up
                        </button>
                    </div>
                </form>
                {error && (
                    <Alert alert={{
                        mainColor: 'bg-red-200',
                        secondaryColor: 'bg-red-200',
                        title: 'Error',
                        text: error
                    }}/>
                )}
            </div>
        </div>
        <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal font-primary">Already have an account? <Link to="/login" className="font-primary font-semibold underline underline-offset-2">Sign in</Link></p>
        </div>
    </div>
  )
}

export default CardRegister