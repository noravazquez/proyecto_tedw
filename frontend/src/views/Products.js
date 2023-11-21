import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet"
import FilterCards from '../components/products/FilterCards'
import ProductList from '../components/products/ProductList'

const Products = () => {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Productos</title>
        </Helmet>
        <BreadCrumb title="Productos" />
        <div className="home-wrapper py-5 px-5">
          <div className="row">
            <FilterCards />
            <ProductList />
          </div>
        </div>
    </>
  )
}

export default Products