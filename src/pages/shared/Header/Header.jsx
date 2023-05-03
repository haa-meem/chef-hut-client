import React from 'react';
import logo from '../../../assets/chef_hut.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <div style={{backgroundColor: 'blue'}}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;