import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='main_footer_container mb-0'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-5">
                        <img style={{ backgroundColor: 'white' }} width="150px" src="https://i.ibb.co/5kfgDNM/download.png" alt="" />
                    </div>
                    <div className="col-lg-2 footer_common_container">
                        <p>About</p>
                        <p>Jobs</p>
                        <p>Security</p>
                    </div>
                    <div className="col-lg-3 footer_common_container">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className="col-lg-2 footer_common_container">
                        <p>Let’s chat!</p>
                        <p>hi@avo.app</p>
                    </div>
                </div>

            </div>
            <div className="footer_mini_container pt-3 pb-1">
                <p>Copyright 2021 INFIGON All Rights Reserved.</p>

            </div>
        </div>
    );
};

export default Footer;