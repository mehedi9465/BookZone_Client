import React from 'react';
import { Button, Col, Image, Nav, Offcanvas, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import InventoryHome from './Inventory Home/InventoryHome';
import './Inventory.css'

const Inventory = () => {

    const { user, logOut } = useAuth();
    return (
        <div className='inventory overflow-x-hidden'>
        
            <Row className='h-100'>
                <Col className=' p-0 border border-end inventoryNav' xl={2} lg={2} md={2} sm={3} xs={12}>
                    <Row>
                        <div className='pt-5 pb-3 px-0 text-center'>
                            {
                                user?.photoURL? 
                                <Image className='rounded-circle img-fluid' src={user?.photoURL} fluid/>
                                :
                                <Image className='rounded-circle' src='https://cdn-icons-png.flaticon.com/512/236/236831.png' width='96' fluid/>
                            }
                            <p className='lead mt-3 w-75 mx-auto'>{user?.displayName}</p>
                        </div>
                    </Row>
                        <Nav className='d-flex justify-content-center'>
                            <Nav.Link as={Link} to='/'>
                                <Button className='rounded-pill text-white' size='sm' variant='outline-secondary'><Image src='https://cdn-icons-png.flaticon.com/512/3596/3596992.png' width='18' />&nbsp;  Home</Button>
                            </Nav.Link>
                            <Nav.Link as={Link} to={`/pay`}>
                                <Button className='rounded-pill text-white' size='sm' variant='outline-secondary'><Image src='https://cdn-icons-png.flaticon.com/512/3596/3596992.png' width='18' />&nbsp;  Pay</Button>
                            </Nav.Link>
                            <Nav.Link as={Link} to={`/myOrders`}>
                                <Button className='rounded-pill text-white' size='sm' variant='outline-secondary'><Image src='https://cdn-icons-png.flaticon.com/512/3596/3596992.png' width='18' />&nbsp;  My Orders</Button>
                            </Nav.Link>
                            <Nav.Link as={Link} to={`/review`}>
                                <Button className='rounded-pill text-white' size='sm' variant='outline-secondary'><Image src='https://cdn-icons-png.flaticon.com/512/3596/3596992.png' width='18' />&nbsp;  Review</Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button onClick={logOut} className='rounded-pill text-white' size='sm' variant='outline-secondary'><Image src='https://cdn-icons-png.flaticon.com/512/3596/3596992.png' width='18' />&nbsp;  Logout</Button>
                            </Nav.Link>
                        </Nav>
                    
                    
                </Col>
                
                <Col className='ps-0 pe-0' xl={10} lg={10} md={10} sm={9} xs={12}>
                    <Routes>
                        <Route path="/" element={<InventoryHome />} />
                        {/* <Route path="/stores" element={<OwnUserProfile />} />
                        <Route path="/books" element={<OwnUserProfile />} />
                        <Route path="/books" element={<OwnUserProfile />} /> */}
                    </Routes>
                </Col>
            </Row>
        </div>
    );
};

export default Inventory;