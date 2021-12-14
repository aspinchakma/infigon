import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner_main_container'>
            <div className="container banner_mini_container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='main_banner_content_container py-5'>
                            <h1>Unlock your</h1>
                            <h1 data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                            >

                                <span className="common_one">FU</span>
                                <span className="common_second">TU</span>

                                <span className='common-three me-2'>RE</span>
                                with us
                            </h1>
                            <p className='mb-2'>A one stop destination for your Career Selection,</p>
                            <p>Education Planning and Skill development.</p>
                            <button
                                data-aos-delay="100"
                                data-aos-duration="1000"
                                data-aos="zoom-in" className='explore_button'>EXPLORE NOW</button>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="col-lg-6 text-center py-5">
                        <img
                            width="100%"
                            src="https://i.ibb.co/j8X96yH/image2.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;