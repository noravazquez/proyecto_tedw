import React from 'react'
import { Link } from 'react-router-dom'
import { MdPageview } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="p-3 bg-white rounded-lg h-[400px] overflow-hidden relative border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform">
      <div className="absolute left-2">
        <div className="flex flex-col gap-4">
          <Link to="/producto/1" className="relative z-10">
            <MdPageview className="text-gray-600 text-lg"/>
          </Link>
          <Link to="#" className="relative z-10">
            <FaCartPlus className="text-gray-600 text-lg"/>
          </Link>
        </div>
      </div>
      <div className="group relative">
        <img src="/images/iphone.jpg" alt="Iphone" className="object-cover h-[300px] w-full transition duration-300"/>
        <img src="/images/iphone2.jpeg" alt="Iphone" className="object-cover h-[300px] w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-300"/>
      </div>
      <div className="relative z-10">
        <h6 className="text-Blue4 text-xs">Celular</h6>
        <h5 className="text-Blue1 text-sm">Iphone</h5>
        <p className="text-Blue2 text-base">$23,000</p>
      </div>
    </div>
  )
}

export default ProductCard