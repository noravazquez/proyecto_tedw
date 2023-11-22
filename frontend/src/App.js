import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Products from './views/Products';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />}/> 
            <Route path='register' element={<Register />}/>  
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;