import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrdenesAdmin = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://54.162.148.240:3003/api/admin/ordenes');
        setOrdenes(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='border bg-white shadow-sm rounded'>
      <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5 justify-between'>
        <h2 className='font-primary font-medium text-Blue2 text-lg'>Ordenes de venta</h2>
      </div>
      <div>
        <div>
          <div className='mx-3 mb-3'>
            <table className='w-full border border-collapse font-primary'>
              <thead>
                <tr className='bg-gray-200 font-semibold'>
                  <td className='border p-2'>Id Orden</td>
                  <td className='border p-2'>Fecha</td>
                  <td className='border p-2'>Estado</td>
                  <td className='border p-2'>Cliente</td>
                  <td className='border p-2'>Direccion</td>
                  <td className='border p-2'>Producto</td>
                  <td className='border p-2'>Cantidad</td>
                  <td className='border p-2'>Total</td>
                  <td className='border p-2'>Metodo pago</td>
                </tr>
              </thead>
              <tbody>
                {
                  ordenes.map((orden) => (
                    <tr key={orden.id_orden_compra}>
                      <td className='border p-2'>{orden.id_orden_compra}</td>
                      <td className='border p-2'>{orden.fecha}</td>
                      <td className='border p-2'>{orden.estado_orden}</td>
                      <td className='border p-2'>{orden.cliente}</td>
                      <td className='border p-2'>{orden.direccion}</td>
                      <td className='border p-2'>{orden.producto}</td>
                      <td className='border p-2'>{orden.cantidad}</td>
                      <td className='border p-2'>$ {orden.total}</td>
                      <td className='border p-2'>{orden.metodo_pago}</td>
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

export default OrdenesAdmin