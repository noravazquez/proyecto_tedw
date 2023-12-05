import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  console.log(document.cookie);
  const id = document.cookie;
  const [cart, setCart] = useState([])
  const [product, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Configura la solicitud con la cookie
        const response = await axios.get(`http://34.207.241.39:3003/api/cart/carrito/${id}`);
        setProducts(response.data.carrito.DetalleCarritos);
        // Actualiza el estado con los datos del carrito
        setCart(response.data.carrito);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {product.map((item) => (
              <div key={item.id_detalle_carrito} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img src={item.Producto.imagenes.imagenes[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{item.Producto.producto}</h2>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <input disabled={true} className="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={item.cantidad} min="1" />
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">$ {item.Producto.precio}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$ {cart.total}</p>
              </div>
            </div>
            <Link to="/checkout">
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart