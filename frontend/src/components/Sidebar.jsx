import React, { useContext, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from './CartItem'
import { SidebarContext } from '../context/SidebarContext'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  return (
    <div className='w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]'>Sidebar</div>
  )
}

export default Sidebar