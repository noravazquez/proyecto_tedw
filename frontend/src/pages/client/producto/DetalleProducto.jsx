/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const DetalleProducto = ({producto}) => {
    const [amount, setAmount] = useState(1);
    /*console.log(producto)*/

  return (
    <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
            <span className="text-Blue4 font-primary font-semibold text-base">{producto.Categorium.categoria}</span>
            <h4 className="text-Blue3 font-primary font-semibold text-xl">{producto.Proveedor.proveedor}</h4>
            <h1 className="text-3xl font-bold text-Blue2 font-primary">{producto.producto}</h1>
        </div>
        <p className="text-base text-Blue3 font-primary">
            {producto.descripcion}
        </p>
        <h6 className="text-2xl font-primary font-semibold text-Blue1">
            $ {producto.precio} mx
        </h6>
        <p className={`text-sm font-primary font-medium ${producto.stock == 0 ? 'text-orange-500' : 'text-green-500'}`}>
            {producto.stock == 0 ? 'Out of stock': producto.stock + ' in stock'}
        </p>
        <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
                <button className="bg-gray-200 py-2 px-5 rounded-lg text-Blue3 text-3xl" onClick={() => setAmount((prev) => prev - 1)}>-</button>
                <span className="py-4 px-6 rounded-lg font-primary">{amount}</span>
                <button className="bg-gray-200 py-2 px-5 rounded-lg text-Blue3 text-3xl" onClick={() => setAmount((prev) => prev + 1)}>+</button>
            </div>
            <button className="bg-Blue2 text-white font-semibold py-3 font-primary px-16 rounded-xl h-full">Add to Cart</button>
        </div>
    </div>
  )
}

export default DetalleProducto