import axios from 'axios';
import React, { useEffect, useState } from 'react'

const recentOrderData = [
  {
      id: '1',
      product: 'Hola',
      customer: 'Jose Perez',
      order_date: '2022-25-17',
      order_total: '$3232.32',
      order_status: 'PLACED',
      address: 'Direccion 121 Gto'
  },
  {
      id: '1',
      product: 'Hola',
      customer: 'Jose Perez',
      order_date: '2022-25-17',
      order_total: '$3232.32',
      order_status: 'CONFIRMED',
      address: 'Direccion 121 Gto'
  },
  {
      id: '1',
      product: 'Hola',
      customer: 'Jose Perez',
      order_date: '2022-25-17',
      order_total: '$3232.32',
      order_status: 'OUT_FOR_DELIVERY',
      address: 'Direccion 121 Gto'
  },
  {
      id: '1',
      product: 'Hola',
      customer: 'Jose Perez',
      order_date: '2022-25-17',
      order_total: '$3232.32',
      order_status: 'DELIVERED',
      address: 'Direccion 121 Gto'
  },
  {
      id: '1',
      product: 'Hola',
      customer: 'Jose Perez',
      order_date: '2022-25-17',
      order_total: '$3232.32',
      order_status: 'SHIPPED',
      address: 'Direccion 121 Gto'
  }
]

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get('http://23.20.161.84:3003/api/stats/total-clientes-registrados');
            setClientes(response.data.totales.clientes);
          } catch (error) {
            console.error('Error al obtener el total de ventas mensuales', error);
            // Puedes manejar el error según tus necesidades
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