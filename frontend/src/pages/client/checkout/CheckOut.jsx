import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
    const countries = ["Avenida Primavera, Ciudad del Sol, Estado Feliz, 12345, País Imaginario", "Suite 789, Edificio Torre Empresarial Delta, 890 Calle Principal", "567 Calle de la Esperanza, Ciudad de Sueños, Estado Esperado, 98765"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("Direccion envio");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    const id = document.cookie;
  const [cart, setCart] = useState([])
  const [product, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Configura la solicitud con la cookie
        const response = await axios.get(`http://34.207.241.39:3003/api/cart/carrito/${id}`);
        console.log(response.data.carrito.DetalleCarritos);
        // Actualiza el estado con los datos del carrito
        setCart(response.data.carrito);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

    return (
        <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">Check Out</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src="https://static.doofinder.com/main-files/uploads/2020/01/check-out.jpg" alt="CheckOut" />
                            </div>
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">

                            <div className="flex flex-row justify-center items-center mt-6">
                                <hr className="border w-full" />
                                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">Pay with card</p>
                                <hr className="border w-full" />
                            </div>

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
                                </div>
                                <div className="flex-row flex">
                                    <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                                    <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Direcciones</label>
                            <div className="mt-2 flex-col">
                                <div className="relative">
                                    <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                                        {country}
                                    </button>
                                    <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
                                        {countries.map((country) => (
                                            <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
                                                {country}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link to='/'>
                            <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <p className="text-base leading-4">Pay ${cart.total}</p>
                                </div>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
