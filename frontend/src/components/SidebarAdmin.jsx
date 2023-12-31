import React, { useState } from 'react'
import { MdCategory, MdPayments, MdSpaceDashboard } from "react-icons/md";
import { FaUsers, FaProductHunt } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";

const SidebarAdmin = () => {
  return (
    <div className='bg-Blue3 h-screen px-6'>
        <div className='px-3 py-7 flex items-center justify-center border-b-2 border-white/50'>
            <h1 className='text-Blue5 text-xl font-primary font-extrabold cursor-pointer'>Admin panel</h1>
        </div>
        <div className='flex items-center gap-3 py-5 border-b-2 border-white/50'>
            <MdSpaceDashboard color='white'/>
            <a href='/dashboard' className='text-sm font-primary font-bold text-Blue5'>Dashboard</a>
        </div>
        <div className='pt-3 border-b-2 border-white/50'>
            <p className='text-xs font-primary font-extrabold text-Blue6'>PAGES</p>
            <div className='flex items-center gap-2 py-3'>
                <FaProductHunt color='white'/>
                <a href='/productosadmin' className='text-sm font-primary font-normal text-Blue5'>Productos</a>
            </div>
            <div className='flex items-center gap-2 py-3'>
                <GrMoney color='white'/>
                <a href='/ordenesadmin' className='text-sm font-primary font-normal text-Blue5'>Ordenes de venta</a>
            </div>
            <div className='flex items-center gap-2 py-3'>
                <FaUsers color='white'/>
                <a href='/clientes' className='text-sm font-primary font-normal text-Blue5'>Clientes</a>
            </div>
            <div className='flex items-center gap-2 py-3'>
                <MdPayments color='white'/>
                <a href='/cuponesmetodospago' className='text-sm font-primary font-normal text-Blue5'>Cupones y metodos de pago</a>
            </div>
            <div className='flex items-center gap-2 py-3'>
                <MdCategory color='white'/>
                <a href='/categoriaproveedor' className='text-sm font-primary font-normal text-Blue5'>Categorias y proveedores</a>
            </div>
        </div>
    </div>
  )
}

export default SidebarAdmin