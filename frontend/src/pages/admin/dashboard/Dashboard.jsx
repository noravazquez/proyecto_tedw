import React from 'react'
import CardsTotal from './CardsTotal'
import Ventas from './Ventas'
import RecentOrders from './RecentOrders'
import LastProducts from './LastProducts'

const Dashboard = () => {
  return (
    <div className='pt-6 px-6 bg-gray-200 pb-5'>
      <h1 className='text-Blue1 text-3xl font-primary font-normal'>Dashboard</h1>
      <CardsTotal />
      <Ventas />
      <div className='flex mt-5 w-full gap-7'>
        <div className='basis-[70%] border bg-white shadow-lg rounded'>
          <RecentOrders />
        </div>
        <div className='basis-[30%] border bg-white shadow-sm rounded'>
          <LastProducts />
        </div>
      </div>
    </div>
  )
}

export default Dashboard