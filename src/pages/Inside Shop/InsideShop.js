import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import BooksCard from './BookCard/BooksCard';

const InsideShop = () => {
    const [books, setBooks] = useState([]);
    const [stores, setStores] = useState([]);
    let { bookStoreId } = useParams();
    const [bookStoreName, setBookStoreName] = useState(bookStoreId);
    const auth = useAuth();
    console.log(auth);

    useEffect(() => {
        axios.get(`http://localhost:4000/books/${bookStoreName}`)
        .then(({ data }) => setBooks(data))
    }, [bookStoreName]);

    useEffect(() => {
        axios.get(`http://localhost:4000/stores`)
        .then(({ data }) => setStores(data))
    }, [])

    const handleStoreChange = e => {
        setBookStoreName(e.target.innerText);
    }

    return (
        <>  
            <aside className='d-flex justify-content-center'>
                <Nav className='my-3'>
                    {
                        stores.map( store => <Nav.Link onClick={handleStoreChange} className='mx-1 bg-info text-light rounded-3 my-1'>{store?.name}</Nav.Link>)
                    }
                </Nav>
            </aside>
            <Container>
            <h1 className='display-3 text-center mt-4 border py-2'>{bookStoreName}</h1>
                <Row className='my-5 py-5 gx-5' xl={5} lg={4} md={3} sm={2} xs={1}>
                    {
                        books.map( book => <BooksCard key={book?._id} book={book}></BooksCard>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default InsideShop;