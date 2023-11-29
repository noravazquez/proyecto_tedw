import React from 'react'
import ProductCard from '../../../components/ProductCard'
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { LuGrip, LuGripHorizontal, LuGripVertical } from "react-icons/lu";

const ListaProductos = () => {
  return (
    <div className="w-4/5 pl-5">
        <div className="bg-white p-2 rounded-lg mb-4">
            <div className="flex justify-end items-center">
                <div className="flex items-center gap-2">
                    <p className="font-primary text-Blue4 text-sm mb-0">21 productos</p>
                    <div className="flex gap-2 items-center">
                        <TfiLayoutGrid4Alt className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" />
                        <LuGrip className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" />
                        <LuGripVertical className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" />
                        <LuGripHorizontal className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-5">
            <div className="flex gap-2 flex-wrap">
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default ListaProductos