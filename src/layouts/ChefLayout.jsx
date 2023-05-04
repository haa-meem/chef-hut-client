import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chef from '../pages/Chef';

const ChefLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Chef></Chef>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChefLayout;