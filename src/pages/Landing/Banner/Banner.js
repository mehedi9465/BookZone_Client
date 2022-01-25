import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='h-100 ms-auto content d-flex align-items-center'>
                <div className=''>
                    <p className=''>Pomegrante</p>
                    <p className='d-none d-sm-none d-lg-block'>Vegetables 100%</p>
                    <p className=''>Organic</p>
                    <Button id='globalBTN' className=''>SHOP NOW</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;