import React from 'react'
import Banner1 from './assets/banner-5.png'
import Banner2 from './assets/banner-2.png'
import Banner3 from './assets/banner-3.png'
import Banner4 from './assets/banner-4.png'

const Banner = () => {
  return (
    <div className="container" style={{marginTop:20, marginBottom:20}}>
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Banner3} className="d-block w-100" alt="Imagen 1 banner" />
                </div>
                <div className="carousel-item">
                    <img src={Banner1} className="d-block w-100" alt="Imagen 2 banner" />
                </div>
                <div className="carousel-item">
                    <img src={Banner2} className="d-block w-100" alt="Imagen 3 banner" />
                </div>
                <div className="carousel-item">
                    <img src={Banner4} className="d-block w-100" alt="Imagen 4 banner" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    </div>
  )
}

export default Banner