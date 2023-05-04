import React, { useContext } from 'react';
import logo from '../../../assets/chef_hut.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <div style={{ backgroundColor: 'blue' }}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link to="/" className='me-3 text-decoration-none text-white'>Home</Link>

                            <Link to="/blog" className='text-decoration-none text-white'>Blog</Link>

                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2.5rem' }}></FaUserCircle>
                            }
                                {user ? <Button variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;