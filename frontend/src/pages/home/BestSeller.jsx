import React from 'react'
import ProductCard from '../../components/ProductCard'

const BestSeller = () => {
  return (
    <div className="bg-gray-50">
      <div className="container pt-8 pr-10 pl-8 pb-8">
        <h2 className="text-3xl font-primary font-semibold capitalize text-center my-8">Best Seller</h2>
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button className="font-primary text-Blue3">Celular</button>
            <button className="font-primary text-Blue3">Laptop</button>
            <button className="font-primary text-Blue3">Tablet</button>
            <button className="font-primary text-Blue3">Pc</button>
            <button className="font-primary text-Blue3">Smartwatch</button>
            <button className="font-primary text-Blue3">Audifonos</button>
        </div>
        <div className="pt-5 grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default BestSeller