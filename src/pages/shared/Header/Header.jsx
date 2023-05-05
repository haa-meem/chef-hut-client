import React, { useContext } from 'react';
import logo from '../../../assets/chef_hut.png'
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Image from 'react-bootstrap/Image'
const Header = () => {
    //Active Link
    const navLinkStyles=({isActive})=>{
        return{
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .error(error => console.log(error.message));
    }
    return (
        <div className='xs:w-100'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <NavLink style={navLinkStyles} to="/" className='me-3 text-decoration-none text-white'>Home</NavLink>

                            <NavLink style={navLinkStyles} to="/blogs" className='text-decoration-none text-white'>Blog</NavLink>

                        </Nav>
                        <Nav>
                            {
                                user &&
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip>{user.displayName}</Tooltip>}
                                >
                                    <Image src={user?.photoURL} className='rounded-5 me-2' height='50px' />
                                </OverlayTrigger>
                            }
                            {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;