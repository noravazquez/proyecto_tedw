import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdPageview } from "react-icons/md"
import { FaCartPlus } from "react-icons/fa"

const ProductCard = ({grid, product}) => {
    //const {grid} = props;
    let location = useLocation();

  return (
    <div className={` ${location.pathname === "/products" ? `card gr-${grid}` : "card col-3"} `}>
        <div className="product-card position-relative">
            <div className="product-image">
                {product.imagenes.map((imagen, index) => (
                    <img
                    key={index}
                    src={`images/${imagen.nombre}`}  // Ajusta la ruta según la estructura de tus imágenes
                    className="card-img-top"
                    alt={`Imagen del producto ${index + 1}`}
                    />
                ))}
            </div>
            <div className="product-details">
                <h5 className="product-title">{product.producto}</h5>
                <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>{product.descripcion}</p>
                <p className="price">${product.precio}</p>
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