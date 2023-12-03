/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const Alert = ({alert}) => {
    const [open, setOpen] = useState(true);

  if (open) {
    return (
        <div className={`absolute items-center ${alert.mainColor} rounded-lg border-2 border-solid ${alert.secondaryColor} m-3 flex`}>
          <div className='flex-col font-primary text-base my-0.15 mx-20 w-full'>
            <span className='font-bold uppercase'>{alert.title}</span>
            <div className='mt-2'>{alert.text}</div>
          </div>
          <a className='mr-2 cursor-pointer' onClick={() => setOpen(false)}>
            <span className='font-primary text-gray-500'>Close</span>
          </a>
        </div>
      )      
  }
}

export default Alert