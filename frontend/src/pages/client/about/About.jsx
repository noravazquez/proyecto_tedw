import React from 'react'
import {Helmet} from 'react-helmet'
import AboutUs from './AboutUs'
import OurStory from './OurStory'
import BreadCrumb from '../../../components/BreadCrumb'

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>About</title>
      </Helmet>
      <BreadCrumb title="About"/>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <AboutUs />
        <OurStory />
      </div>
    </>
  )
}

export default About