import React from 'react'
import VentasSemanales from './VentasSemanales';
import VentasMensuales from './VentasMensuales';
import VentasAnuales from './VentasAnuales';
import Clientes from './Clientes';

const Ventas = () => {
  return (
    <>
      <div className='flex mt-5 w-full gap-7'>
        <div className='basis-[70%] border bg-white shadow-lg rounded'>
          <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>VENTAS MENSUALES</h2>
          </div>
          <div>
            <VentasMensuales />
          </div>
        </div>
        <div className='basis-[30%] border bg-white shadow-sm rounded'>
          <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>VENTAS SEMANALES</h2>
          </div>
          <div>
            <VentasSemanales />
          </div>
        </div>
      </div>

      <div className='flex mt-5 w-full gap-7'>
        <div className='basis-[50%] border bg-white shadow-lg rounded'>
          <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>VENTAS ANUALES</h2>
          </div>
          <div>
            <VentasAnuales />
          </div>
        </div>
        <div className='basis-[50%] border bg-white shadow-sm rounded'>
          <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5'>
            <h2 className='font-primary font-medium text-Blue2 text-lg'>CLIENTES</h2>
          </div>
          <div>
            <Clientes />
          </div>
        </div>
      </div>
    </>
  )
}

export default Ventas