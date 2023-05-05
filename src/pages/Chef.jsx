import React, { useState } from 'react';
import { Badge, Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { FaRegGrinHearts, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const Chef = () => {
    const { id, name, picture, likes, num_recipes, years_of_experience, recipes } = useParams();
    const chef = useLoaderData();
    console.log(chef.recipes[0].ingredients);

    //For three favorite buttons
    const [isFavorite1, setIsFavorite1] = useState(false);
    const [isFavorite2, setIsFavorite2] = useState(false);
    const [isFavorite3, setIsFavorite3] = useState(false);

    const handleFavoriteClick = (buttonIndex) => {
        switch (buttonIndex) {
            case 1:
                setIsFavorite1(true);
                showToastMessage();
                break;
            case 2:
                setIsFavorite2(true);
                showToastMessage();
                break;
            case 3:
                setIsFavorite3(true);
                showToastMessage();
                break;
            default:
                break;
        }
    }

    const showToastMessage = () => {
        alert("This recipe is now your favorite!"); //toast message
    }

    return (
        <Container className="my-5">
            <Row xs={1} md={2} lg={1} className="g-4 my-3">
                <Col>
                    <Card className="text-center">
                        <Card.Header>
                            <Card.Img variant="top" src={chef.picture} style={{ height: 'fit-content' }} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{chef.name}</Card.Title>
                            <Card.Text>
                                <p><b>Bio:</b> {chef.bio}</p>
                                <p><b>Numbers of recipes:</b> {chef.num_recipes}</p>
                                <p><b>Years of experience:</b> {chef.years_of_experience}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                            <p className='d-flex align-items-center'><FaRegThumbsUp className='' />{chef.likes}</p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={chef.recipes[0].recipe_img} style={{ height: '500px' }} />
                    <Card.Body>
                        <Card.Title>{chef.recipes[0].recipe_name}</Card.Title>
                        <Card.Text>
                            <p><b>Ingredients: </b>
                                <ul>
                                    {chef.recipes[0].ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </p>
                            <p><b>Cooking method:</b> {chef.recipes[0].cooking_method}</p>
                            <p className='d-flex align-items-center'><b className='me-1'>Rating:</b> <FaStar color='rgb(245,197,24)' className='me-1'></FaStar>{chef.recipes[0].rating}</p>
                            <Button variant='danger' onClick={() => handleFavoriteClick(1)} disabled={isFavorite1} className='d-flex align-items-center'>
                                <FaRegGrinHearts className='me-1'></FaRegGrinHearts>
                                {isFavorite1 ? "Added to Favorites" : "Favorite"}
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={chef.recipes[1].recipe_img} style={{ height: '500px' }} />
                    <Card.Body>
                        <Card.Title>{chef.recipes[1].recipe_name}</Card.Title>
                        <Card.Text>
                            <p><b>Ingredients: </b>
                                <ul>
                                    {chef.recipes[1].ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </p>
                            <p><b>Cooking method:</b> {chef.recipes[1].cooking_method}</p>
                            <p className='d-flex align-items-center'><b className='me-1'>Rating:</b> <FaStar color='rgb(245,197,24)' className='me-1'></FaStar>{chef.recipes[1].rating}</p>
                            <Button variant='danger' onClick={() => handleFavoriteClick(2)} disabled={isFavorite2} className='d-flex align-items-center'>
                                <FaRegGrinHearts className='me-1'></FaRegGrinHearts>
                                {isFavorite2 ? "Added to Favorites" : "Favorite"}
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={chef.recipes[2].recipe_img} style={{ height: '500px' }} />
                    <Card.Body>
                        <Card.Title>{chef.recipes[2].recipe_name}</Card.Title>
                        <Card.Text>
                            <p><b>Ingredients: </b>
                                <ul>
                                    {chef.recipes[2].ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </p>
                            <p><b>Cooking method:</b> {chef.recipes[2].cooking_method}</p>
                            <p className='d-flex align-items-center'><b className='me-1'>Rating:</b> <FaStar color='rgb(245,197,24)' className='me-1'></FaStar>{chef.recipes[2].rating}</p>
                            <Button variant='danger' onClick={() => handleFavoriteClick(3)} disabled={isFavorite3} className='d-flex align-items-center'>
                                <FaRegGrinHearts className='me-1'></FaRegGrinHearts>
                                {isFavorite3 ? "Added to Favorites" : "Favorite"}
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default Chef;