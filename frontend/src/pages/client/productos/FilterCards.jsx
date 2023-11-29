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
        <div className="bg-Blue5 rounded-lg px-3 py-3">
            <h3 className="font-primary font-semibold text-base text-Blue2 mb-5">Filter By</h3>
            <div>
                <h5 className="font-primary text-sm font-semibold text-Blue3 mb-3 mt-3">Availablity</h5>
                <div className="flex items-center mb-4">
                    <input type="checkbox" id="default-checkbox" className="appearance-none w-4 h-4 border-2 border-Blue3 rounded-sm bg-white mt-1 mr-1 checked:bg-Blue2 checked:border-0"/>
                    <label htmlFor="default-checkbox" className="font-primary text-sm leading-7 text-Blue1 cursor-pointer"> In stock</label>
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" className="appearance-none w-4 h-4 border-2 border-Blue3 rounded-sm bg-white mt-1 mr-1 checked:bg-Blue2 checked:border-0"/>
                    <label htmlFor="default-checkbox" className="font-primary text-sm leading-7 text-Blue1 cursor-pointer"> Out of stock</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterCards