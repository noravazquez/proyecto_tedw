import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import ImagenProducto from './ImagenProducto'
import DetalleProducto from './DetalleProducto'
import { Link, useParams } from 'react-router-dom'

const Producto = () => {
  const { id } = useParams()

  const [producto, setProducto] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://54.166.237.193:3003/api/product/products/${id}`)
        setProducto(response.data.producto)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
  }, [id])

  if (!producto) {
    return null;
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Producto</title>
      </Helmet>
      <div className="mb-0 py-4">
        <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1">
                <div className="col-span-1">
                    <p className="text-center mb-0 font-primary">
                        <Link to="/">Home </Link> / <Link to="/productos" > Productos </Link> / {producto.producto}
                    </p>
                </div>
            </div>
        </div>
    </div>
      <div className="max-w-7xl bg-Blue6 mx-auto p-8 mb-5">
        <div className="flex flex-col justify-between lg:flex-row gap-10 lg:items-center">
            {/* Imagenes */}
            {producto && <ImagenProducto imagenes={producto.imagenes}/>}
            {/* About */}
            {producto && <DetalleProducto producto={producto}/>}
        </div>
      </div>
    </>
  )
}

export default Producto