import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from 'swiper';
import axios from 'axios';
import Store from '../Store/Store';
import Rating from 'react-rating';
import './BookStores.css'
import { useNavigate } from 'react-router';


const BookStore = () => {

    const [stores, setStores] = useState([]);
    const navigate = useNavigate();
    const [screenSize, setScreenSize] = useState(window.screen.width);

    useEffect( () => {
        axios.get('http://localhost:4000/stores')
        .then(({ data }) => setStores(data));
        setInterval(() => {
            setScreenSize(window.screen.width);
        }, 1000)
    }, [])
    console.log(stores);

    const handleExplore = (storeName) => {
        navigate(`/${storeName}`)
    }

    return (
        <div id='store' className='my-5'>
            <Container>
                <h1 className='text-center display-2'>Stores</h1>
                <Row className='my-5 py-3'>
                {
                    screenSize >= 992 &&
                    <Swiper slidesPerView={3} spaceBetween={75} pagination={{
                    "clickable": true}} className="mySwiper">
                    <Row xl={3} lg={3} md={2} sm={1} xs={1}>
                    {
                        stores.map((store, index) => <SwiperSlide key={index} className='text-center rounded storeCard'>
                        <div className='cover rounded-top'>
                            <img className=' rounded-top' src={store?.img} alt="" height='300px' width='100%'/>
                        </div>
                        <div>
                            <Rating className='mt-1 mx-auto'
                                        readonly
                                        initialRating = {store?.storeRating}
                                        emptySymbol={
                                            <img src="https://cdn-icons-png.flaticon.com/32/616/616821.png" alt=''  width='15'/>
                                        }
                                        fullSymbol={
                                            <img src="https://cdn-icons-png.flaticon.com/32/616/616489.png" alt=''  width='15'/>
                                        }
                            />
                            <p className='fs-4 mt-2'> {store?.name}</p>
                        </div>
                        <Button onClick={() => handleExplore(store?.name)} className='text-dark w-100 invisible explore' variant='outline-info'>Explore</Button>
                        </SwiperSlide>)
                    }
                    </Row>
                    </Swiper>
                }

                {
                    (screenSize >= 580 && screenSize <= 992) &&
                    <Swiper slidesPerView={2} spaceBetween={75} pagination={{
                    "clickable": true}} className="mySwiper">
                    <Row xl={3} lg={3} md={2} sm={1} xs={1}>
                    {
                        stores.map((store, index) => <SwiperSlide key={index} className='text-center rounded storeCard'>
                        <div className='cover rounded-top'>
                            <img className=' rounded-top' src={store?.img} alt="" height='300px' width='100%'/>
                        </div>
                        <div>
                            <Rating className='mt-1 mx-auto'
                                        readonly
                                        initialRating = {store?.storeRating}
                                        emptySymbol={
                                            <img src="https://cdn-icons-png.flaticon.com/32/616/616821.png" alt=''  width='15'/>
                                        }
                                        fullSymbol={
                                            <img src="https://cdn-icons-png.flaticon.com/32/616/616489.png" alt=''  width='15'/>
                                        }
                            />
                            <p className='fs-4 mt-2'> {store?.name}</p>
                        </div>
                        <Button onClick={() => handleExplore(store?.name)} className='text-dark w-100 invisible explore' variant='outline-info'>Explore</Button>
                        </SwiperSlide>)
                    }
                    </Row>
                    </Swiper>
                }

                {
                    screenSize <= 580 &&
                    <Swiper slidesPerView={1} spaceBetween={75} pagination={{
                    "clickable": true}} className="mySwiper">
                    <Row xl={3} lg={3} md={2} sm={1} xs={1}>
                    {
                        stores.map((store, index) => <SwiperSlide key={index} className='text-center rounded storeCard'>
                        <div className='cover rounded-top'>
                            <img className=' rounded-top' src={store?.img} alt="" height='300px' width='100%'/>
                        </div>
                        <div>
                            <Rating className='mt-1 mx-auto'
                                        readonly
                                        initialRating = {store?.storeRating}
                                        emptySymbol={
                                            <img src="https://cdn-icons-png.flaticon.com/32/616/616821.png" alt=''  width='15'/>
                                        }
                                        fullSymbol={
                                            <img src="https://cdn-icons-png.flaticon.com/32/616/616489.png" alt=''  width='15'/>
                                        }
                            />
                            <p className='fs-4 mt-2'> {store?.name}</p>
                        </div>
                        <Button onClick={() => handleExplore(store?.name)} className='text-dark w-100 invisible explore' variant='outline-info'>Explore</Button>
                        </SwiperSlide>)
                    }
                    </Row>
                    </Swiper>
                }
                </Row>
            </Container>
        </div>
    );
};

export default BookStore;