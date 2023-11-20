import React from 'react'
import cellphone from '../assets/cellphone.png'
import earphones from '../assets/earphones.png'
import laptop from '../assets/laptop.png'
import smartwatch from '../assets/smartwatch.png'
import tablet from '../assets/tablet.png'

const WrapperCategories = () => {
  return (
    <div className="home-wrapper py-5 px-3 px-md-5">
        <div className="row">
            <div className="col-12">
                <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex flex-column gap-10 align-items-center col-md-4 col-lg-2 ">
                        <h6>Tablets</h6>
                        <img src={tablet} width="130" height="130" alt="Tablets" />
                    </div>
                    <div className="d-flex flex-column gap-10 align-items-center col-md-4 col-lg-2">
                        <h6>Laptops</h6>
                        <img src={laptop} width="130" height="130" alt="Laptops" />
                    </div>
                    <div className="d-flex flex-column gap-10 align-items-center col-md-4 col-lg-2">
                        <h6>Celulares</h6>
                        <img src={cellphone} width="130" height="130" alt="Celulares" />
                    </div>
                    <div className="d-flex flex-column gap-10 align-items-center col-md-4 col-lg-2">
                        <h6>Smartwatch</h6>
                        <img src={smartwatch} width="130" height="130" alt="Smartwatch" />
                    </div>
                    <div className="d-flex flex-column gap-10 align-items-center col-md-4 col-lg-2">
                        <h6>Audifonos</h6>
                        <img src={earphones} width="130" height="130" alt="Audifonos" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WrapperCategories