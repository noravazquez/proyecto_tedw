import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
    // eslint-disable-next-line react/prop-types
    const { title } = props

  return (
    <div className="mb-0 py-4">
        <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1">
                <div className="col-span-1">
                    <p className="text-center mb-0 font-primary">
                        <Link to="/">Home </Link> / {title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb