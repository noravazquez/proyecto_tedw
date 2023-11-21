import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdPageview } from "react-icons/md"
import { FaCartPlus } from "react-icons/fa"

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();

  return (
    <div className={` ${location.pathname === "/products" ? `card gr-${grid}` : "card col-3"} `}>
        <div className="product-card position-relative">
            <div className="product-image">
                <img src="images/smartwatch2.jpg" className="card-img-top" alt="Imagen del producto"/>
                <img src="images/smartwatch.jpg" className="card-img-top" alt="Imagen del producto"/>
            </div>
            <div className="product-details">
                <h6 className="brand">Huawei</h6>
                <h5 className="product-title">Smartwatch SERIE 8 HW8</h5>
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>La nueva generación de pantalla completa de alta definición de 1,99 pulgadas, 
                resolución de pantalla de alta píxeles, diseño de borde estrecho, rechaza la interrupción de bordes negros pesados 
                y le brinda un disfrute visual más abierto. Con resolución de 420*480 para hacerlo lo mejor del mercado hasta el momento.</p>
                <p className="price">$1,098.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link to="#">
                        <MdPageview className="fs-4 text-secondary"/>
                    </Link>
                    <Link to="#">
                        <FaCartPlus className="fs-4 text-secondary"/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard