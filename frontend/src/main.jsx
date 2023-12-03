import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/client/home/Home.jsx';
import Search from './components/Search.jsx';
import Login from './pages/client/login/Login.jsx';
import Register from './pages/client/register/Register.jsx';
import Cart from './pages/client/cart/Cart.jsx';
import Productos from './pages/client/productos/Productos.jsx';
import Producto from './pages/client/producto/Producto.jsx';
import About from './pages/client/about/About.jsx';
import Contact from './pages/client/contact/Contact.jsx';
import QA from './pages/client/qa/QA.jsx';
import Dashboard from './pages/admin/dashboard/Dashboard.jsx';
import CategoriaProveedor from './pages/admin/categoriaProveedor/CategoriaProveedor.jsx';
import Clientes from './pages/admin/clientes/Clientes.jsx';
import CuponesMetodosPago from './pages/admin/cuponesMetodosPago/CuponesMetodosPago.jsx';
import OrdenesAdmin from './pages/admin/ordenesAdmin/OrdenesAdmin.jsx';
import ProductosAdmin from './pages/admin/productosAdmin/ProductosAdmin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />
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
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/categoriaproveedor",
        element: <CategoriaProveedor />
      },
      {
        path: "/clientes",
        element: <Clientes />
      },
      {
        path: "/cuponesmetodospago",
        element: <CuponesMetodosPago />
      },
      {
        path: "/ordenesadmin",
        element: <OrdenesAdmin />
      },
      {
        path: "/productosadmin",
        element: <ProductosAdmin />
      }
    ]
  },
  {
    path: "/login/:message?",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
