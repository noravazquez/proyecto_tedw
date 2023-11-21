import React from 'react'

const FilterCards = () => {
  return (
    <div className="col-3">
        <div className="filter-card mb-3">
            <h3 className="filter-title">Shop By Categories</h3>
            <div>
                <ul className="ps-0">
                    <li>Tablet</li>
                    <li>Laptop</li>
                    <li>Celular</li>
                    <li>Smartwatch</li>
                    <li>Audifono</li>
                </ul>
            </div>
        </div>
        <div className="filter-card mb-3">
            <h3 className="filter-title">Filter By</h3>
            <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="" />
                        <label className="form-check-label" htmlFor="">
                            In stock (1)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="" />
                        <label className="form-check-label" htmlFor="">
                            Out of stock (0)
                        </label>
                    </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                    <div className="input-group mb-3" >
                        <span className="input-group-text">$</span>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                            <label htmlFor="floatingInput">From</label>
                        </div>
                    </div>
                    <div className="input-group mb-3" >
                        <span className="input-group-text">$</span>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                            <label htmlFor="floatingInput">To</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterCards