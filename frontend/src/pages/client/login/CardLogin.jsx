import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../../components/Alert';
import { useAuth } from '../../../context/AuthContext';

const CardLogin = () => {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        usuario: '',
        contrasena: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://35.153.204.145:3003/api/auth/login', formData);
            console.log('Login successful:', response.data);
            login();
            console.log('After login:', isAuthenticated);
            navigate('/');

            // Puedes realizar acciones adicionales aquí, como redireccionar a otra página.
        } catch (error) {
            console.error('Login failed:', error.response.data);
            setError(error.response.data)
            // Puedes mostrar un mensaje de error al usuario aquí.
        }
    };
    return (
        <div className="relative lg:w-1/2 h-full flex flex-col p-20 justify-between">
            <h1 className="font-primary text-2xl text-Blue1 font-semibold"><Link to={"/"}>Innovatech</Link></h1>
            <div className="w-full flex flex-col max-w-[450px]">
                <div className="w-full flex flex-col mb-5">
                    <h3 className="text-4xl font-primary font-semibold mb-2">Login</h3>
                    <p className="text-sm font-primary mb-3">Welcome back! Please enter your details.</p>
                </div>
                <div className="w-full flex flex-col">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="usuario"
                            placeholder="Usuario"
                            value={formData.usuario}
                            onChange={handleChange}
                            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        />
                        <input
                            type="password"
                            name="contrasena"
                            placeholder="Password"
                            value={formData.contrasena}
                            onChange={handleChange}
                            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        />
                        <div className="w-full flex flex-col my-4">
                            <button
                                type="submit"
                                className="w-full bg-Blue1 rounded-md p-4 text-center text-white font-primary font-semibold flex items-center justify-center"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                    {error && (
                        <Alert alert={{
                            mainColor: 'bg-red-200',
                            secondaryColor: 'bg-red-200',
                            title: 'Error',
                            text: error
                        }} />
                    )}
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <p className="text-sm font-normal font-primary">Dont have a account? <Link to="/register" className="font-primary font-semibold underline underline-offset-2">Sign up</Link></p>
            </div>
        </div>
    )
}

export default CardLogin