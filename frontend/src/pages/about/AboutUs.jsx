import React from 'react'
import about from '/images/imageAbout.png'

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="font-primary text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
        <p className="font-primary font-normal text-base leading-6 text-gray-600 ">Welcome to Innovatech, where technology meets innovation! At Innovatech, we believe in the power of technology to transform lives and simplify the way we connect with the world. Our passion for cutting-edge gadgets and groundbreaking solutions has driven us to curate a collection of the latest and greatest in the tech world.
        Founded with the vision of making technology accessible to everyone, we strive to offer a seamless online shopping experience. Whether you are a tech enthusiast, a professional seeking productivity tools, or someone simply looking for the coolest gadgets, Innovatech is your go-to destination.</p>
      </div>
      <div className="w-full lg:w-8/12 ">
        <img className="w-full h-full rounded-lg" src={about} alt="About Image" />
      </div>
    </div>
  )
}

export default AboutUs