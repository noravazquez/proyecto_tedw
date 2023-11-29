import React, { useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Banner = () => {

    const slides = [
        {
            imagePath: '/images/banner-1.png',
            altText: 'Slide 1'
        },
        {
            imagePath: '/images/banner-2.png',
            altText: 'Slide 2'
        },
        {
            imagePath: '/images/banner-3.png',
            altText: 'Slide 3'
        },
        {
            imagePath: '/images/banner-4.png',
            altText: 'Slide 4'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide =  currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (
    <div className="bg-white max-w-[1120px] h-[624px] m-auto py-16 px-4 relative group">
        <div 
            style={{backgroundImage: `url(${slides[currentIndex].imagePath})`}} 
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsArrowLeftCircle onClick={prevSlide} size={30} />
        </div>
        
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsArrowRightCircle onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Banner