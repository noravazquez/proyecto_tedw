import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get('http://34.226.214.97:3003/api/stats/total-clientes-registrados');
            setClientes(response.data.totales.clientes);
          } catch (error) {
            console.error('Error al obtener el total de ventas mensuales', error);
          }
        };
  
      fetchData();
    }, []);
  return (
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
  )
}

export default Clientes