import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { LuGrip, LuGripHorizontal, LuGripVertical } from "react-icons/lu";
import ProductCard from '../ProductCard'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [grid, setGrid] = useState(4);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
              const response = await axios.get('http://localhost:3001/api/product/products');
              const { productos } = response.data;
              
              if (Array.isArray(productos)) {
                setProducts(productos);
              } else {
                console.error('Response data "productos" is not an array:', productos);
              }
            } catch (error) {
              console.error('Error fetching products:', error);
            }
        };          
    
        fetchProducts();
    }, []);
    
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
                {products.map((product) => (
                    <ProductCard key={product.id_producto} grid={grid} product={product} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductList