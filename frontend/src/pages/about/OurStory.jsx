import React from 'react'

const OurStory = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="font-primary text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
            <p className=" font-primary font-normal text-base leading-6 text-gray-600 ">In the heart of the ever-evolving tech landscape, Innovatech was born out of a shared passion for innovation and a deep appreciation for the transformative power of technology. Our journey began with a simple yet profound idea: to make cutting-edge tech accessible to everyone.
            Driven by the belief that technology should enhance lives and simplify the way we connect with the world, we set out on a mission to curate a collection of the most exciting and revolutionary gadgets. From the latest smartphones to smart home devices and everything in between, Innovatech is your gateway to the future.
            But Innovatech is more than just an ecommerce platform; it is a community of tech enthusiasts, early adopters, and visionaries. We understand that technology is not just about products; it is about the experiences they enable and the possibilities they unlock.</p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src={'/images/chica.png'} alt="Alexa featured Img" />
                    <img className="md:hidden block" src={'/images/chica.png'} alt="Alexa featured Img" />
                    <p className="font-primary font-medium text-xl leading-5 text-gray-800 mt-4">Kimberly</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src={'/images/chica2.png'} alt="Nora featured Img" />
                    <img className="md:hidden block" src={'/images/chica2.png'} alt="Nora featured Img" />
                    <p className="font-primary font-medium text-xl leading-5 text-gray-800 mt-4">Nora</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src={'/images/hombre.png'} alt="Liam featued Img" />
                    <img className="md:hidden block" src={'/images/hombre.png'} alt="Liam featued Img" />
                    <p className="font-primary font-medium text-xl leading-5 text-gray-800 mt-4">Adrian</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStory