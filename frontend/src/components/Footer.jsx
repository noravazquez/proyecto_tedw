import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <footer className="bg-Blue5 max-w-screen-2xl xl:px-28 px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="col-span-3 md:col-span-1">
                    <h5 className="font-primary text-xl font-bold text-Blue1 mb-4">Contáctanos</h5>
                    <div>
                        <address className="font-primary text-sm"> 
                        Street: GALARZA NO. 7, CENTRO <br /> City: Guanajuato <br />
                        Zip code: 36000 <br /> Country: México
                        </address>
                        <a href="tel:+52 4737324657" className="mt-3 block font-primary text-Blue2">+52 4737324657</a>
                        <a href="mailto:tiwossoummofoi-6154@yopmail.com" className="mt-2 block font-primary text-Blue2">tiwossoummofoi-6154@yopmail.com</a>
                        <div className="social-icons flex items-center gap-3 mt-4">
                        <a href="https://www.instagram.com/electron_mx/" className="text-gray-600 w-8 h-8">
                            <FaInstagram className="text-lg"/>
                        </a>
                        <a href="https://www.facebook.com/electronmx" className="text-gray-600 w-8 h-8">
                            <FaFacebook className="text-lg"/>
                        </a>
                        <a href="https://twitter.com/ElectronMexico" className="text-gray-600 w-8 h-8">
                            <FaSquareXTwitter className="text-lg"/>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <h5 className="font-primary text-xl font-bold text-Blue1 mb-4">Acerca de</h5>
                    <div className="footer-link flex flex-col">
                        <a href="/about" className="font-primary py-2 mb-1 text-Blue2">Sobre nosotros</a>
                        <a href="/qa" className="font-primary py-2 mb-1 text-Blue2">Preguntas frecuentes</a>
                        <a href="/contact" className="font-primary py-2 mb-1 text-Blue2">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="bg-white max-w-screen-2xl xl:px-28 px-4 py-4">
            <p className="text-center mb-0">
                &copy; {new Date().getFullYear()}; TEDW
            </p>
        </footer>
    </>
  )
}

export default Footer