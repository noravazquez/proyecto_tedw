import React from 'react'
import { Helmet } from 'react-helmet'
import BreadCrumb from '../../components/BreadCrumb'
import FilterCards from './FilterCards'
import ListaProductos from './ListaProductos'

const Productos = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Productos</title>
      </Helmet>
      <BreadCrumb title="Productos"/>
      <div className="bg-Blue6 py-5 px-14">
        <div className="flex items-center justify-between">
          <FilterCards />
          <ListaProductos />
        </div>
      </div>
    </>
  )
}

export default Productos