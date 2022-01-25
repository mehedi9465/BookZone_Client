import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faUser, faCartPlus, faHeart, faBars, faColumns, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import OffCanvasMenu from '../../OffCanvasMenu/OffCanvasMenu';
import './Header.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const [show, setShow] = useState(false);
    const { user, logOut } = useAuth();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar className='navbar' collapseOnSelect bg="warning" variant="light" sticky='top'>
            <Container className=''>
            <Button variant='transparent' className='mt-2 me-2 d-flex p-0 d-sm-flex d-md-flex d-lg-none d-xl-none' onClick={handleShow}><FontAwesomeIcon className='fs-3' icon={faBars}/></Button>
            <Navbar.Brand> <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/books/logo-books.webp" alt="" /> </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="mx-auto d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
                    <Nav.Link as={Link} to='/'>HOME</Nav.Link>
                    <Nav.Link as={HashLink} to='/#store'>STORE</Nav.Link>
                    <Nav.Link href="#pricing">ABOUT</Nav.Link>
                    <Nav.Link href="#pricing">DISCOUNTS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {
                user?.email? 
                (
                    <Nav>
                        <Nav.Link className='fs-5 fw-lighter position-relative' href="#deets">
                        <div className='position-relative'>
                        <FontAwesomeIcon  icon={faHeart} />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            1
                        </span>
                        </div>
                        </Nav.Link>
                        
                        <Nav.Link className='fs-5 fw-lighter' href="#deets">
                        <div className='position-relative'>
                        <FontAwesomeIcon  icon={faCartPlus} />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            3
                        </span>
                        </div> 
                        </Nav.Link>

                        <NavDropdown title={<FontAwesomeIcon className='fs-5 mt-1'  icon={faUser} />}>
                            <NavDropdown.Item>{user?.displayName}</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item><FontAwesomeIcon className='fs-6 mt-1'  icon={faUser} /> &nbsp; &nbsp;Profile</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/inventory'><FontAwesomeIcon className='fs-6 mt-1'  icon={faColumns} /> &nbsp; &nbsp;Inventory</NavDropdown.Item>
                            <NavDropdown.Item onClick={logOut}><FontAwesomeIcon className='fs-6 mt-1'  icon={faSignOutAlt} /> &nbsp; &nbsp;log out</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                ) : 
                (
                    <Nav>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                )
            }
            </Container>
            </Navbar>
            <OffCanvasMenu show={show} onHide={handleClose}/>
        </>
    );
};

export default Header;