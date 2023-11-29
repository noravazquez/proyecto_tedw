import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <aside className={`fixed top-0 right-0 h-screen ${isSidebarOpen ? '' : 'hidden'}`}>
        <nav className="h-full flex flex-col bg-Blue6 border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                <button className="p-1.5 rounded-lg text-gray-600" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
        </nav>
    </aside>
  )
}

Sidebar.propTypes = {
    isSidebarOpen: PropTypes.func.isRequired,
    closeSidebar: PropTypes.func.isRequired
}

export default Sidebar