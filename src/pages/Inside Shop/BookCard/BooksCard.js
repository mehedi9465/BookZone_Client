import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './BookCard.css';

const BooksCard = ({ book }) => {
    return (
        <Col>
            <div className='position-relative bookCard'>
                <div className='cover rounded-top'>
                    <img className=' rounded-top' src={book?.img} alt="" height='300px' width='100%'/>
                </div>
                <div>
                    <Rating className='mt-1 mx-auto'
                                readonly
                                initialRating = {book?.rating}
                                emptySymbol={
                                    <img src="https://cdn-icons-png.flaticon.com/32/616/616821.png" alt=''  width='15'/>
                                }
                                fullSymbol={
                                    <img src="https://cdn-icons-png.flaticon.com/32/616/616489.png" alt=''  width='15'/>
                                }
                    />
                    <p className='fs-6 mt-2'> {book?.bookName}</p>
                    <div className='w-75 d-flex justify-content-between'>
                        <p className='px-2 fw-bold text-white bg-info rounded-3'>{book?.category}</p>
                        <p className='px-2 fw-bold text-white bg-info ms-2 rounded-3'>{book?.quantity}</p>
                    </div>
                    <p className='fw-bold w-25 text-white bg-info text-center rounded-3'>${book?.price}</p>
                </div>
                <Button variant='info' className='w-100 text-white'>Add To Cart</Button>
            </div>
        </Col>
    );
};

export default BooksCard;