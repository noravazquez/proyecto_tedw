import React, { useState } from 'react'
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { LuGrip, LuGripHorizontal, LuGripVertical } from "react-icons/lu";
import ProductCard from '../ProductCard'

const ProductList = () => {
    const [grid, setGrid] = useState(4);
    
  return (
    <div className="col-9">
        <div className="filter-sort-grid mb-4">
            <div className="d-flex justify-content-end align-items-center">
                <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 productos</p>
                    <div className="d-flex gap-10 align-items-center">
                        <TfiLayoutGrid4Alt className="text-secondary grid" onClick={() => { setGrid(3); }}/>
                        <LuGrip className="text-secondary grid" onClick={() => { setGrid(4); }}/>
                        <LuGripVertical className="text-secondary grid" onClick={() => { setGrid(6); }}/>
                        <LuGripHorizontal className="text-secondary grid" onClick={() => { setGrid(12); }}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="product-list pb-5">
            <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
            </div>
        </div>
    </div>
  )
}

export default ProductList