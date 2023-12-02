import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';

const NavbarAdmin = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className='bg-Blue4 h-16 px-4 flex justify-end items-center shadow-lg'>
      <div className="inline-flex items-center text-gray-600 lg:mr-8">
          <a href="#"><FaUser className=' h-6 w-6'/></a>
          <div className="relative">
              <button type="button">
                  <IoIosArrowDown onClick={toggleDropdown}/>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                  <div className="p-2">
                    <a
                        href="/dashboard"
                        className="block px-4 py-1 text-sm text-Blue2 font-primary rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                        Your profile
                    </a>
                    <a
                        href="/dashboard"
                        className="block px-4 py-1 text-sm text-Blue2 font-primary rounded-lg hover:bg-gray-50 hover:text-gray-700"
                    >
                        Sign out
                    </a>
                  </div>
                </div>
              )}
          </div>
      </div>
    </div>
  )
}

export default NavbarAdmin