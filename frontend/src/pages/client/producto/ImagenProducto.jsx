import React, { useState } from 'react'

const ImagenProducto = () => {
    const [images, setImages] = useState({
        img1 : "/images/iphone.jpg",
        img2 : "/images/iphone2.jpeg",
        img3 : "/images/iphone3.jpg",
        img4 : "/images/iphone4.jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)
  return (
    <div className="flex flex-col gap-6 lg:w-2/4">
        <img src={activeImg} alt=""  className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform w-full h-full aspect-square object-cover rounded-xl"/>
        <div className="flex flex-row justify-between h-24">
            <img src={images.img1} alt="" className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img1)}/>
            <img src={images.img2} alt="" className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img2)}/>
            <img src={images.img3} alt="" className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img3)}/>
            <img src={images.img4} alt="" className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform w-24 h-24 rounded-md cursor-pointer" onClick={() => setActiveImage(images.img4)}/>
        </div>
    </div>
)
}

export default ImagenProducto