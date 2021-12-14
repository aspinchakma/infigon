import AOS from 'aos';
import React, { useEffect } from 'react';
import Footer from '../SharedPage/Footer/Footer';
import Header from '../SharedPage/Header/Header';
import './HowWeHelp.css';

const HowWeHelp = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Header />
            <div className='how_main_container'>

                <div className='container how_mini_container_border'>
                    <div className="row how_mini_container">
                        <div data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            className="col-lg-6 banner_content_container">
                            <h2 className='mb-3'>How we can Help</h2>
                            <p>Condimentum vel vestibulum, facilisi enuismod id ornare fermentum ac. Bibendum turpis faucibus faucibus lectus cursus elementum. Suscipit sed lectus</p>
                            <div className='banner_details mt-4'>
                                <h5>STEP 1 <span>SELF ANALYSIS</span></h5>
                                <h5>STEP 2 <span>SELF ANALYSIS</span></h5>
                                <h5>STEP 3 <span>SELF ANALYSIS</span></h5>
                                <h5>STEP 4 <span>SELF ANALYSIS</span></h5>
                            </div>

                        </div>
                        <div data-aos="fade-left" className="col-lg-6 text-center">
                            <img src="https://i.ibb.co/dDqtL1f/image.png" alt="" />



                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default HowWeHelp;