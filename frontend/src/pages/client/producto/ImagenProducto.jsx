/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

const ImagenProducto = ({imagenes}) => {
    const [activeImg, setActiveImage] = useState(imagenes.imagenes[0])
    
  return (
    <div className="flex flex-col gap-6 lg:w-2/4">
        <img src={activeImg} alt=""  className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform w-full h-full aspect-square object-cover rounded-xl"/>
        <div className="flex flex-row justify-between h-24">
        {imagenes.imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index + 1}`}
            className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(imagen)}
          />
        ))}
        </div>
    </div>
)
}

export default ImagenProducto