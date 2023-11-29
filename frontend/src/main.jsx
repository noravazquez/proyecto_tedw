import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Search from './components/Search.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Cart from './pages/cart/Cart.jsx';
import Productos from './pages/productos/Productos.jsx';
import Producto from './pages/Producto/Producto.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import QA from './pages/qa/QA.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/productos",
        element: <Productos />
      },
      {
        path: "/producto/:id",
        element: <Producto />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/qa",
        element: <QA />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
