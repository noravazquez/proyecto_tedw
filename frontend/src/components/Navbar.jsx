import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from '/images/logo.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Navbar = ({ toggleSidebar }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {title: "Home", path: "/"},
        {title: "Productos", path: "/productos"},
        {title: "Sobre nosotros", path: "/about"},
        {title: "Contacto", path: "/contact"}
    ]

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }

  return (
    <header className="bg-Blue5 max-w-screen-2xl xl:px-28 px-4">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
            <a href="/search">
                <FaSearch className="text-gray-600 w-5 h-5 cursor-pointer hidden md:block"/>
            </a>
            <a href="/"><img src={logo} alt="Logo" /></a>
            <div className="text-gray-600 sm:flex items-center gap-4 hidden">
                <div className="inline-flex items-center">
                    <a href="#"><FaUser /></a>
                    <div className="relative">
                        <button type="button" onClick={toggleDropdown}>
                            <IoIosArrowDown />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                                <div className="p-2">
                                    <a
                                        href="/login"
                                        className="block px-4 py-1 text-sm text-Blue2 font-primary rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        LOGIN
                                    </a>
                                    <a
                                        href="/register"
                                        className="block px-4 py-1 text-sm text-Blue2 font-primary rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        REGISTER
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative inline-flex items-center">
                    <a href="#" onClick={toggleSidebar}><FaShoppingCart /></a>
                    <button type="button" onClick={toggleSidebar}>
                        <div className="absolute -top-3 -right-3 bg-Blue3 text-white rounded-full w-5 h-5 flex items-center justify-center">0</div>
                    </button>
                    
                </div>
            </div>

            <div className="sm:hidden">
                <button onClick={toggleMenu}>
                    {
                        isMenuOpen ? <FaTimes className="w-5 h-5 text-gray-600"/> : <FaBars className="w-5 h-5 text-gray-600"/>
                    }
                </button>
            </div>
        </nav>

        <hr />

        <div className="pt-4">
            <ul className="lg:flex items-center justify-between hidden">
                {
                    navItems.map(({title, path}) => (
                        <li key={title}>
                            <Link to={path} 
                            className="text-Blue2 font-primary text-sm leading-4 font-medium tracking-widest uppercase hover:text-Blue3">
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div>
            <div className="flex items-center justify-between sm:hidden">
                <a href="/search">
                    <FaSearch className="text-gray-600 w-5 h-5 cursor-pointer mx-4"/>
                </a>

                <div className="inline-flex items-center">
                    <a href="#"><FaUser className="text-gray-600 w-5 h-5 cursor-pointer"/></a>
                    <div className="relative">
                        <button type="button" onClick={toggleDropdown}>
                            <IoIosArrowDown className="text-gray-600 w-5 h-5 cursor-pointer"/>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                                <div className="p-2">
                                    <a
                                        href="/login"
                                        className="block px-4 py-2 text-sm text-Blue2 font-primary rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        LOGIN
                                    </a>
                                    <a
                                        href="/register"
                                        className="block px-4 py-2 text-sm text-Blue2 font-primary rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        REGISTER
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative">
                    <a href="/">
                        <FaShoppingCart className="text-gray-600 w-5 h-5 cursor-pointer" />
                    </a>
                    <div className="absolute -top-3 -right-3 bg-Blue3 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    0
                    </div>
                </div>
            </div>
            <br />
            <ul className={`bg-Blue5 text-Blue2 px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
                {
                    navItems.map(({title, path}) => (
                        <li key={title}>
                            <Link to={path} 
                            className="text-Blue2 font-primary text-sm leading-4 font-medium tracking-widest uppercase hover:text-Blue3 my-3 cursor-pointer">
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

Navbar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
}

export default Navbar