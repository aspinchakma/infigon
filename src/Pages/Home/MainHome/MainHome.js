import React from 'react';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';
import Banner from '../Banner/Banner';
import Offer from './../Offer/Offer';

const MainHome = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Offer />
            <Footer />
        </div>
    );
};

export default MainHome;