import React from 'react';
import './Offer.css';
const Offer = () => {
    return (
        <div className="my-5">
            <h2 className='text-center mb-3'>OUR OFFERS</h2>
            <div className="container mx-auto row">
                <div className="col-lg-6  text-right py-2"
                    data-aos="zoom-in"
                >
                    <div className="offer_left_container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-5">

                            </div>
                            <div className="col-lg-7 col-sm-7 col-7 col-md-7">
                                <h2>TENDING</h2>
                                <h3>COURSES</h3>
                                <p className="white_line"></p>
                                <p>Watch classes anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6  text-right py-2"
                    data-aos="zoom-in"
                >
                    <div className='offer_right_container'>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-5">

                            </div>
                            <div className="col-lg-7 col-sm-7 col-7 col-md-7">
                                <h2>NEW</h2>
                                <h3>COURSES</h3>
                                <p className="white_line"></p>
                                <p>Create projects and build a portfolio.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Offer;