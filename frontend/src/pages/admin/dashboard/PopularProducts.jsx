import React from 'react'

const popularProductsData = [
    {
        id: '3323',
        product: 'Product 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgdN2SExEAN_JfGIA0PiSDhHYeLX8h4Q9bw&usqp=CAU',
        price: '$3332.12',
        stock: '23'
    },
    {
        id: '3323',
        product: 'Product 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgdN2SExEAN_JfGIA0PiSDhHYeLX8h4Q9bw&usqp=CAU',
        price: '$3332.12',
        stock: '23'
    },
    {
        id: '3323',
        product: 'Product 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgdN2SExEAN_JfGIA0PiSDhHYeLX8h4Q9bw&usqp=CAU',
        price: '$3332.12',
        stock: '23'
    },
    {
        id: '3323',
        product: 'Product 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgdN2SExEAN_JfGIA0PiSDhHYeLX8h4Q9bw&usqp=CAU',
        price: '$3332.12',
        stock: '23'
    },
    {
        id: '3323',
        product: 'Product 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgdN2SExEAN_JfGIA0PiSDhHYeLX8h4Q9bw&usqp=CAU',
        price: '$3332.12',
        stock: '0'
    }
]

const PopularProducts = () => {
  return (
    <div>
        <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>POPULAR PRODUCTS</h2>
        </div>
        <div className='flex flex-col gap-2'>
            {
                popularProductsData.map((product) => (
                    <div key={product.id} className='flex hover:no-underline font-primary'>
                        <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
                            <img src={product.image} alt={product.product} className='w-full h-full object-cover'/>
                        </div>
                        <div className='ml-3 flex-1'>
                            <p className='text-sm text-Blue2'>{product.product}</p>
                            <span className={`text-sm font-medium ${product.stock == 0 ? 'text-orange-500' : 'text-green-500'}`}>
                                {product.stock == 0 ? 'Out of stock': product.stock + ' in stock'}
                            </span>
                        </div>
                        <div className='text-xs text-Blue4 pr-2'>{product.price}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PopularProducts