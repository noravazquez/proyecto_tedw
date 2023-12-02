import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Sidebar = () => {
  return (
    <aside className={`fixed top-0 right-0 h-screen}`}>
        <nav className="h-full flex flex-col bg-Blue6 border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                <button className="p-1.5 rounded-lg text-gray-600">
                    <FaTimes />
                </button>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar