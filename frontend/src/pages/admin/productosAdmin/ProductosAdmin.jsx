import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductosAdmin = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://54.162.148.240:3003/api/admin/productos');
        setProductos(response.data.productos);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='border bg-white shadow-sm rounded'>
      <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5 justify-between'>
        <h2 className='font-primary font-medium text-Blue2 text-lg'>Productos</h2>
      </div>
      <div>
        <div>
          <div className='mx-3 mb-3'>
            <table className='w-full border border-collapse font-primary'>
              <thead>
                <tr className='bg-gray-200 font-semibold'>
                  <td className='border p-2'>Id Producto</td>
                  <td className='border p-2'>Producto</td>
                  <td className='border p-2'>Descripcion</td>
                  <td className='border p-2'>Precio</td>
                  <td className='border p-2'>Stock</td>
                </tr>
              </thead>
              <tbody>
                {
                  productos.map((producto) => (
                    <tr key={producto.id_producto}>
                      <td className='border p-2'>{producto.id_producto}</td>
                      <td className='border p-2'>{producto.producto}</td>
                      <td className='border p-2'>{producto.descripcion}</td>
                      <td className='border p-2'>$ {producto.precio}</td>
                      <td className='border p-2'>{producto.stock}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProductosAdmin