import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
