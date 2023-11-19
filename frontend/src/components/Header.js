import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from './assets/logo-dd.png'
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="header-top py-3">
        <div className="contrainer-xxl">
          <div className="row align-items-center">
            <div className="col-3 d-flex align-items-center">
              <img src={logo} alt="Logo"/>
              <h2>
                <Link className="text-secondary">Innovatech</Link>
              </h2>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Buscar producto..." aria-label="Buscar producto..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><FaSearch className="fs-6"/></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-top-links d-flex align-items-center justify-content-between">
                <div style={{marginLeft:'180px'}}>
                  <Link className="d-flex align-items-center gap-10 text-secondary">
                    <FaHeart />
                    <p className="mb-0">
                      Favoritos
                    </p>
                  </Link>
                </div>
                <div style={{marginLeft: '10px'}}>
                  <Link className="d-flex align-items-center gap-10 text-secondary">
                    <FaUser />
                    <p className="mb-0">
                      Log in <br /> Sign up
                    </p>
                  </Link>
                </div>
                <div style={{marginRight: '20px'}}>
                  <Link className="d-flex align-items-center gap-10 text-secondary">
                    <FaShoppingCart />
                    <div className="cart-count">0</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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