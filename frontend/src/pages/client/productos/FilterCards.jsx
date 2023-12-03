import React from 'react'

const FilterCards = () => {
  return (
    <div className="w-1/5">
        <div className="bg-Blue5 rounded-lg px-3 py-3 mb-3">
            <h3 className="font-primary font-semibold text-base text-Blue2 mb-5">Shop By Categories</h3>
            <div>
                <ul className="ps-0 font-primary text-sm leading-7 text-Blue1 cursor-pointer">
                    <li>Tablet</li>
                    <li>Celular</li>
                    <li>Laptop</li>
                    <li>Pc</li>
                    <li>Smartwatch</li>
                    <li>Audifonos</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FilterCards