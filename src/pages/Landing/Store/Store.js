import React from 'react';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate } from 'react-router';
import { SwiperSlide } from 'swiper/react';

const Store = ({ store }) => {
    const navigate = useNavigate();
    console.log(store);

    const handleExplore = (storeName) => {
        navigate(`/${storeName}`)
    }

    return (
            <SwiperSlide className='text-center rounded storeCard'>
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
            </SwiperSlide>
    );
};

export default Store;