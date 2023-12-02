import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from './Banner'
import Category from './Category'
import BestSeller from './BestSeller'
import offer from '/images/offer.png'
import WrapperMarquee from './WrapperMarquee'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Innovatech</title>
      </Helmet>
      <Banner />
      <Category />
      <BestSeller />
      <section>
        <img src={offer} alt="Special offer" className="object-cover w-full h-auto transition duration-300"/>
      </section>
      <WrapperMarquee />
    </>
  )
}

export default Home