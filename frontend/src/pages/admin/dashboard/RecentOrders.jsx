import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RecentOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
            const response = await axios.get('http://54.162.148.240:3003/api/admin/detallesordenes');
            setOrders(response.data);
          } catch (error) {
            console.error('Error al obtener el total de ventas mensuales', error);
            // Puedes manejar el error según tus necesidades
          }
        };
  
      fetchData();
    }, []);
    
  return (
    <div>
        <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>RECENT ORDERS</h2>
        </div>
        <div className='mx-3 mb-3'>
            <table className='w-full border border-collapse font-primary'>
                <thead>
                    <tr className='bg-gray-200 font-semibold'>
                        <td className='border p-2'>ID Order</td>
                        <td className='border p-2'>Customer</td>
                        <td className='border p-2'>Order Date</td>
                        <td className='border p-2'>Shipping Address</td>
                        <td className='border p-2'>Order Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => (
                            <tr key={order.id}>
                                <td className='border p-2'>#{order.id_orden_compra}</td>
                                <td className='border p-2'>{order.Cliente.cliente}</td>
                                <td className='border p-2'>{order.fecha}</td>
                                <td className='border p-2'>{order.Direccion.direccion}</td>
                                <td className='border p-2'>{getOrderStatus(order.estado_orden)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentOrders

// eslint-disable-next-line react-refresh/only-export-components
export function getOrderStatus(status) {
    switch (status) {
		case 'PLACED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'CONFIRMED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'SHIPPED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'OUT_FOR_DELIVERY':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'completada':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}