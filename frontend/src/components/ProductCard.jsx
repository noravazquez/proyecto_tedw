/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { MdPageview } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";


const ProductCard = ({producto}) => {
  {/*console.log(producto)*/}
  return (
    <div className="p-3 bg-white rounded-lg h-[410px] overflow-hidden relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform">
      <div className="absolute left-2">
        <div className="flex flex-col gap-4">
          <Link to={`/producto/${producto.id_producto}`} className="relative z-10">
            <MdPageview className="text-gray-600 bg-white text-lg"/>
          </Link>
          <Link to="#" className="relative z-10">
            <FaCartPlus className="text-gray-600 bg-white text-lg"/>
          </Link>
        </div>
      </div>
      <div className="group relative">
        {
          producto.imagenes.imagenes.slice(0, 2).map((imagen, index) => (
            <img key={index} src={imagen} alt={`Imagen ${index + 1}`} className={`object-cover h-[300px] w-full  ${index == 0 ? 'transition duration-300' : 'absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-300'}`}/>
          ))
        }
      </div>
      <div className="relative z-10 top-2 font-primary">
        <h6 className="text-Blue4 text-sm">{producto.Proveedor.proveedor}</h6>
        <h5 className="text-Blue1 text-base font-bold">{producto.producto}</h5>
        <p className="text-Blue2 text-lg">${producto.precio} mx</p>
      </div>
    </div>
  )
}

export default ProductCard