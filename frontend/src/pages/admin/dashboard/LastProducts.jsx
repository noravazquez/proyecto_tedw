import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PopularProducts = () => {
  const [lastProducts, setLastProductos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosResponse = await axios.get('http://54.162.148.240:3003/api/product/lastproducts')
        setLastProductos(productosResponse.data.productos)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])
  return (
    <div>
        <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>POPULAR PRODUCTS</h2>
        </div>
        <div className='flex flex-col gap-2'>
            {
                lastProducts.map((product) => (
                    <div key={product.id_producto} className='flex hover:no-underline font-primary'>
                        <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
                            <img src={product.imagenes.imagenes[0]} alt={product.producto} className='w-full h-full object-cover'/>
                        </div>
                        <div className='ml-3 flex-1'>
                            <p className='text-sm text-Blue2'>{product.producto}</p>
                            <span className={`text-sm font-medium ${product.stock == 0 ? 'text-orange-500' : 'text-green-500'}`}>
                                {product.stock == 0 ? 'Out of stock': product.stock + ' in stock'}
                            </span>
                        </div>
                        <div className='text-xs text-Blue4 pr-2'>{product.precio}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PopularProducts