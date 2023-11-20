import React from 'react'
import Marquee from 'react-fast-marquee'
import apple from '../assets/apple.png'
import asus from '../assets/asus.png'
import dell from '../assets/dell.jpg'
import huawei from '../assets/huawei.png'
import lenovo from '../assets/lenovo.png'
import samsung from '../assets/samsung.jpg'
import xiaomi from '../assets/xiaomi.png'

const WrapperMarquee = () => {
  return (
    <div className="marquee-wrapper py-5 px-4">
        <div className="row">
            <div className="row">
                <div className="col-12">
                    <div className="marquee-inner-wrapper card-wrapper">
                        <Marquee className="d-flex">
                            <div className="mx-4 w-25">
                                <img src={apple} width="100" height="100" alt="Brand Apple" />
                            </div>
                            <div className="mx-4 w-25">
                                <img src={asus} width="100" height="100" alt="Brand Asus" />
                            </div>
                            <div className="mx-4 w-25">
                                <img src={dell} width="100" height="100" alt="Brand Dell" />
                            </div>
                            <div className="mx-4 w-25">
                                <img src={huawei} width="150" height="100" alt="Brand Huawei" />
                            </div>
                            <div className="mx-4 w-25">
                                <img src={lenovo} width="100" height="100" alt="Brand Lenovo" />
                            </div>
                            <div className="mx-4 w-25">
                                <img src={samsung} width="150" height="100" alt="Brand Samsung" />
                            </div>
                            <div className="mx-4 w-25">
                                <img src={xiaomi} width="130" height="100" alt="Brand Xiaomi" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WrapperMarquee