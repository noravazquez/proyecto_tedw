import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import './App.css'
import NavbarAdmin from './components/NavbarAdmin';
import SidebarAdmin from './components/SidebarAdmin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    // Intenta obtener las cookies después de que la aplicación ha sido montada
    const cookies = document.cookie;
    console.log(cookies);
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/*<div className='flex'>
        <div className='basis-[18%] h-[100vh]'>
          <SidebarAdmin />
        </div>
        <div className='basis-[82%] h-[100vh] overflow-scroll'>
          <NavbarAdmin />
          <Outlet />
        </div>
      </div>*/}
    </>
  )
}

export default App
