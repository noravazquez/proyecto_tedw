import React from 'react'
import { Helmet } from 'react-helmet'
import ImagenProducto from './ImagenProducto'
import DetalleProducto from './DetalleProducto'
import BreadCrumb from '../../../components/BreadCrumb'

const Producto = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Producto</title>
      </Helmet>
      <BreadCrumb title="Producto"/>
      <div className="max-w-7xl bg-Blue6 mx-auto p-8 mb-5">
        <div className="flex flex-col justify-between lg:flex-row gap-10 lg:items-center">
            {/*Imagenes */}
            <ImagenProducto />
            {/*About */}
            <DetalleProducto />
        </div>
      </div>
    </>
  )
}

export default Producto