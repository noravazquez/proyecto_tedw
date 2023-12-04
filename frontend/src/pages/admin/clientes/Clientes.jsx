import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.153.204.145:3003/api/stats/total-clientes-registrados');
        setClientes(response.data.totales.clientes);
      } catch (error) {
        console.error('Error al obtener el total de ventas mensuales', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='border bg-white shadow-sm rounded'>
      <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5 justify-between'>
        <h2 className='font-primary font-medium text-Blue2 text-lg'>Clientes</h2>
      </div>
      <div>
        <div>
          <div className='mx-3 mb-3'>
            <table className='w-full border border-collapse font-primary'>
              <thead>
                <tr className='bg-gray-200 font-semibold'>
                  <td className='border p-2'>Nombre</td>
                  <td className='border p-2'>Apellido paterno</td>
                  <td className='border p-2'>Apellido materno</td>
                </tr>
              </thead>
              <tbody>
                {
                  clientes.map((cliente, index) => (
                    <tr key={index}>
                      <td className='border p-2'>{cliente.nombre}</td>
                      <td className='border p-2'>{cliente.apellido_paterno}</td>
                      <td className='border p-2'>{cliente.apellido_materno}</td>
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

export default Clientes