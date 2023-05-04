import React from 'react';
import UpperNav from '../../UpperNav/UpperNav';
import MiddleNav from '../../MiddleNav/MiddleNav';
import { Container } from 'react-bootstrap';
import LowerNav from '../../LowerNav/LowerNav';

const Home = () => {
    return (
        <Container>
            <UpperNav></UpperNav>
            <MiddleNav></MiddleNav>
            <LowerNav></LowerNav>
        </Container>
    );
};

export default Home;