import React from 'react'
import {Helmet} from "react-helmet"
import Banner from '../components/home/Banner'
import Wrapper from '../components/home/Wrapper'
import WrapperCategories from '../components/home/WrapperCategories'
import WrapperMarquee from '../components/home/WrapperMarquee'
import ProductCard from '../components/ProductCard'
import sale from '../components/assets/sale.png'

const Home = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Innovatech</title>
      </Helmet>
      <section >
        <Banner />
      </section>
      <section>
        <Wrapper />
      </section>
      <section>
        <WrapperCategories />
      </section>
      <section className="featured-wrapper home-wrapper py-5 px-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Nuevos Lanzamientos</h3>
          </div>
          <div className="d-flex gap-10">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section>
        <img src={sale} className="img-fluid" alt="Special Offer"/>
      </section>
      <section className="popular-wrapper home-wrapper py-5 px-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Productos Populares</h3>
          </div>
        </div>
        <div className="d-flex gap-10 row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section>
        <WrapperMarquee />
      </section>
    </>
  )
}

export default Home