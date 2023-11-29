import React from 'react'
import Marquee from 'react-fast-marquee'
import apple from '/images/apple.png'
import asus from '/images/asus.png'
import dell from '/images/dell.jpg'
import huawei from '/images/huawei.png'
import lenovo from '/images/lenovo.png'
import samsung from '/images/samsung.jpg'
import xiaomi from '/images/xiaomi.png'

const WrapperMarquee = () => {
  return (
    <div className="bg-gray-50">
        <div className="py-5 px-4">
            <div className="flex flex-col md:flex-row h-[150px] bg-white shadow-md">
                <Marquee>
                    <div className="mx-4 w-1/4">
                        <img src={apple} className="h-36 object-contain" alt="Brand Apple" />
                    </div>
                    <div className="mx-4 w-1/4">
                        <img src={asus} className="h-36 object-contain" alt="Brand Apple" />
                    </div>
                    <div className="mx-4 w-1/4">
                        <img src={dell} className="h-36 object-contain" alt="Brand Apple" />
                    </div>
                    <div className="mx-4 w-1/4">
                        <img src={huawei} className="h-36 object-contain" alt="Brand Apple" />
                    </div>
                    <div className="mx-4 w-1/4">
                        <img src={lenovo} className="h-36 object-contain" alt="Brand Apple" />
                    </div>
                    <div className="mx-4 w-1/4">
                        <img src={samsung} className="h-36 object-contain" alt="Brand Apple" />
                    </div>
                    <div className="mx-4 w-1/4">
                        <img src={xiaomi} className="h-36 object-contain" alt="Brand Apple" />
                    </div>
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default WrapperMarquee