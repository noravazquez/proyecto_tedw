import React from 'react'
import Banner from '../components/home/Banner'
import Wrapper from '../components/home/Wrapper'
import WrapperCategories from '../components/home/WrapperCategories'
import WrapperMarquee from '../components/home/WrapperMarquee'

const Home = () => {
  return (
    <>
      <section >
        <Banner />
      </section>
      <section>
        <Wrapper />
      </section>
      <section>
        <WrapperCategories />
      </section>
      <section>
        <WrapperMarquee />
      </section>
    </>
  )
}

export default Home