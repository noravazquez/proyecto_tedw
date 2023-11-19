import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h5 className="text-secondary mb-4">Contáctanos</h5>
              <div>
                <address className="text-secondary fs-6"> 
                Street: GALARZA NO. 7, CENTRO <br /> City: Guanajuato <br />
                Zip code: 36000 <br /> Country: México
                </address>
                <a href="tel:+52 4737324657" className="mt-3 d-block mb-1 text-secondary">+52 4737324657</a>
                <a href="mailto:tiwossoummofoi-6154@yopmail.com" className="mt-2 d-block mb-0 text-secondary">tiwossoummofoi-6154@yopmail.com</a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-secondary" href="https://www.instagram.com/electron_mx/">
                    <FaInstagram className="fs-4"/>
                  </a>
                  <a className="text-secondary" href="https://www.facebook.com/electronmx">
                    <FaFacebook className="fs-4"/>
                  </a>
                  <a className="text-secondary" href="https://twitter.com/ElectronMexico">
                    <FaSquareXTwitter className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <h5 className="text-secondary mb-4">Información del sitio</h5>
              <div className="footer-link  d-flex flex-column">
                <Link className="text-secondary py-2 mb-1">Política de privacidad</Link>
                <Link className="text-secondary py-2 mb-1">Política de reembolso</Link>
                <Link className="text-secondary py-2 mb-1">Política de envío</Link>
                <Link className="text-secondary py-2 mb-1">Terminos y condiciones</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-secondary mb-4">Acerca de</h5>
              <div className="footer-link  d-flex flex-column">
                <Link className="text-secondary py-2 mb-1">Sobre nosotros</Link>
                <Link className="text-secondary py-2 mb-1">Preguntas frecuentes</Link>
                <Link className="text-secondary py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-secondary mb-4">Links rápidos</h5>
              <div className="footer-link  d-flex flex-column">
                <Link className="text-secondary py-2 mb-1">Laptops</Link>
                <Link className="text-secondary py-2 mb-1">Audífonos</Link>
                <Link className="text-secondary py-2 mb-1">Tablets</Link>
                <Link className="text-secondary py-2 mb-1">Celulares</Link>
                <Link className="text-secondary py-2 mb-1">Relojes inteligentes</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                &copy; {new Date().getFullYear()}; TEDW
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer