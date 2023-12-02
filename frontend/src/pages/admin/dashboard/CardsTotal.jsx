import React from 'react'
import { GrMoney } from "react-icons/gr";
import { MdStickyNote2 } from "react-icons/md";
import { FaUsers, FaProductHunt } from "react-icons/fa";

const CardsTotal = () => {
  return (
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 mt-6 pb-3 gap-4'>
        <div className='h-[100px] rounded-lg bg-white border-l-4 border-Blue2 flex items-center justify-between px-7 hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-Blue4 text-xs font-primary font-bold'>Total ventas (mensuales)</h2>
                <h1 className='text-xl font-primary font-bold text-Blue2 mt-1'>$43434.13</h1>
            </div>
            <GrMoney fontSize={30}/>
        </div>
        <div className='h-[100px] rounded-lg bg-white border-l-4 border-Blue2 flex items-center justify-between px-7 hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-Blue4 text-xs font-primary font-bold'>Total ordenes (anuales)</h2>
                <h1 className='text-xl font-primary font-bold text-Blue2 mt-1'>$43434.13</h1>
            </div>
            <MdStickyNote2 fontSize={30}/>
        </div>
        <div className='h-[100px] rounded-lg bg-white border-l-4 border-Blue2 flex items-center justify-between px-7 hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-Blue4 text-xs font-primary font-bold'>Total clientes</h2>
                <h1 className='text-xl font-primary font-bold text-Blue2 mt-1'>$43434.13</h1>
            </div>
            <FaUsers fontSize={30}/>
        </div>
        <div className='h-[100px] rounded-lg bg-white border-l-4 border-Blue2 flex items-center justify-between px-7 hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
            <div>
                <h2 className='text-Blue4 text-xs font-primary font-bold'>Total productos</h2>
                <h1 className='text-xl font-primary font-bold text-Blue2 mt-1'>$43434.13</h1>
            </div>
            <FaProductHunt fontSize={30}/>
        </div>
    </div>
  )
}

export default CardsTotal