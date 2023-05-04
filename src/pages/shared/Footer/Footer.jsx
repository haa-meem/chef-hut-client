import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegPaperPlane } from 'react-icons/fa';
import { GiCook } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{
            position: 'fixed',
            right: '0',
            left: '0',
            bottom: '0',
        }}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <GiCook style={{ fontSize: '3rem', color: 'white' }} className='me-1' /> <h2 className='text-white me-3'>Chef Hut</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-5'>

                            <Link to="/" className='me-2 text-decoration-none text-white'>Recipes</Link>

                            <Link to="/blog" className='me-2 text-decoration-none text-white'>Cookbooks</Link>

                            <Link to="/blog" className='me-2 text-decoration-none text-white'>Contact</Link>

                        </Nav>
                        <Nav>
                            <h4 className="text-white me-3">Subscribe
                            </h4>
                            <p className="text-secondary me-3">
                                Join thousands of subscribers and get our best recipes delivered each week!
                            </p>
                            <input className="ps-2 py-1 pe-4 rounded" type="email" name="email" id="" placeholder="Email Address" /><Button className="bg-warning rounded"><FaRegPaperPlane style={{ color: 'black' }} /></Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Footer;