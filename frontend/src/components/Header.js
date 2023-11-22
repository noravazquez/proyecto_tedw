import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from './assets/logo-dd.png'
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const Header = () => {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'#dfe7f2'}}>
          <div className="container-fluid">
            <Link className="navbar-brand text-secondary d-flex align-items-center gap-30">
              <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
              <h2>Innovatech</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
                <li className="nav-item search-item">
                  <Link className="nav-link text-secondary me-lg-5 d-flex align-items-center">
                    <FaSearch />
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn btn-secondary text-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FaUser />
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/login">Login</Link></li>
                      <li><Link className="dropdown-item" to="/register">Register</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-secondary me-lg-5 d-flex align-items-center">
                    <FaShoppingCart />
                    <div className="cart-count">0</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30" style={{marginLeft:'100px'}}>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <BiCategory />
                      Categorias
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="">Actio</Link></li>
                      <li><Link className="dropdown-item" to="">Another actio</Link></li>
                      <li><Link className="dropdown-item" to="">Something else her</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Productos</NavLink>
                    <NavLink to="/about">Sobre nosotros</NavLink>
                    <NavLink to="/contact">Contacto</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header