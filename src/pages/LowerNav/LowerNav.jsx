import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import meal1 from '../../assets/meal1.jpg';
import meal2 from '../../assets/meal2.jpg';
import meal3 from '../../assets/meal3.jpg';

const LowerNav = () => {
    return (
        <div className='my-2 w-75 mx-auto'>
            <h2 className='text-center my-4'>Special Meals for You</h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Image src={meal1} style={{ height: '300px' }} roundedCircle />
                    </Col>
                    <Col>
                        <Image src={meal2} style={{ height: '300px' }} roundedCircle />
                    </Col>
                    <Col>
                        <Image src={meal3} style={{ height: '300px' }} roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LowerNav;