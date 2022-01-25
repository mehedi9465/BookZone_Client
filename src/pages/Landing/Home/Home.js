import React from 'react';
import Banner from '../Banner/Banner';
import BookStore from '../BookStores/BookStore';
import TopSale from '../Top Sale/TopSale';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookStore></BookStore>
            <TopSale></TopSale>
        </div>
    );
};

export default Home;