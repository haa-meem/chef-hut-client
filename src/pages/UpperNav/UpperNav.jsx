import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const UpperNav = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-jmm6.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error())
    }, [])
    return (
        <div>
            <h2 className='text-center my-4'>Chinese Master Chefs</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefs.map(chef => <Col
                        key={chef.id}
                    >
                        <Card className="text-center">
                            <Card.Header>
                                <LazyLoad>
                                    <Card.Img variant="top" src={chef.picture} style={{ height: '270px' }} />
                                </LazyLoad>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{chef.name}</Card.Title>
                                <Card.Text>
                                    <p>Years of experience: {chef.years_of_experience}</p>
                                    <p>Numbers of recipes: {chef.num_recipes}</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                                <p className='d-flex align-items-center'><FaRegThumbsUp className='' />{chef.likes}</p>
                                <Link to={`/chef/${chef.id}`}><Button variant="dark">View Recipes</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default UpperNav;