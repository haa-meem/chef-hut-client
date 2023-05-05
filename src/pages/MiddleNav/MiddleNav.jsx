import React from 'react';
import { Carousel } from 'react-bootstrap';
import food1 from '../../assets/food1.jpg';
import food2 from '../../assets/food2.jpg';
import food3 from '../../assets/food3.jpg';

const MiddleNav = () => {
    return (
        <div className='my-4 lg:w-75 mx-auto'>
            <h2 className='text-center my-4'>Special Foods from Master Chefs</h2>
            <Carousel>
                <Carousel.Item interval={300}>
                    <img
                        className="d-block w-100"
                        src={food1} style={{ height: '600px' }} 
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Chicken, tomato salad close up</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={150}>
                    <img
                        className="d-block w-100"
                        src={food2} style={{ height: '600px' }}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Monterrey</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={food3} style={{ height: '600px' }}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Noodles</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MiddleNav;