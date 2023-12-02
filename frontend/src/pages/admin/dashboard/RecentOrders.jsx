import React from 'react'

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

const RecentOrders = () => {
  return (
    <div>
        <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>RECENT ORDERS</h2>
        </div>
        <div className='mx-3 mb-3'>
            <table className='w-full border border-collapse font-primary'>
                <thead>
                    <tr className='bg-gray-200 font-semibold'>
                        <td className='border p-2'>ID</td>
                        <td className='border p-2'>Product</td>
                        <td className='border p-2'>Customer</td>
                        <td className='border p-2'>Order Date</td>
                        <td className='border p-2'>Order Total</td>
                        <td className='border p-2'>Shipping Address</td>
                        <td className='border p-2'>Order Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td className='border p-2'>#{order.id}</td>
                                <td className='border p-2'>{order.product}</td>
                                <td className='border p-2'>{order.customer}</td>
                                <td className='border p-2'>{order.order_date}</td>
                                <td className='border p-2'>{order.order_total}</td>
                                <td className='border p-2'>{order.address}</td>
                                <td className='border p-2'>{getOrderStatus(order.order_status)}</td>
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
		case 'DELIVERED':
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