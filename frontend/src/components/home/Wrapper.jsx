import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Wrapper = () => {
  return (
    <div className="home-wrapper pt-5 px-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="services d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-15">
                            <FaCartShopping size={42}/>
                            <div>
                                <h6>FREE DELIVERY</h6>
                                <p className="mb-0">From all orders over $100</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                            <PiMedalFill size={42}/>
                            <div>
                                <h6>QUALITY GUARANTEE</h6>
                                <p className="mb-0">Your satisfaction is our top priority</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                            <MdOutlineLocalOffer size={42}/>
                            <div>
                                <h6>DAILY OFFERS</h6>
                                <p className="mb-0">Discover new deals every day!</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                            <RiSecurePaymentLine size={42}/>
                            <div>
                                <h6>100% SECURE PAYMENT</h6>
                                <p className="mb-0">Your payment is safe and secure with us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wrapper