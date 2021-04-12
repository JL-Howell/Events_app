import React, { useEffect, useState } from 'react';
import { usePosition } from 'use-position';
import { Container, Col, Row, Table } from 'reactstrap';
import Restaurant from './restaurantDisplay';


const Restaurants = () => {
    const {
      latitude,
      longitude,
    } = usePosition();

    const [restaurants, setRestaurants] = useState([]);
    const userKey = '7d7b035f516913d8ca80b25363350681';

    console.log(latitude, longitude);

    const getRestaurant = (props) => {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
            method: 'GET',
            headers: {
                'user-key': userKey,
                'Content-Type': "application/json"
            }
        })
        .then(res => res.json())
        .then(data => setRestaurants(data.nearby_restaurants))
    }

    useEffect(() => {
        if(!latitude || !longitude) return;
        getRestaurant();
    }, [latitude, longitude])

    return (    
        <div className="restaurant">
            <Container>
                <Row>
                    <Col lg="12">
                    <h1>Restaurants Near You</h1>
                    <br/>
                            <Table hover bordered responsive>
                                <thead>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <th scope="row">Cuisine</th>
                                        <th scope="row">Rating</th>
                                        <th scope="row">Address</th>
                                        <th scope="row">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {restaurants.length > 0 ? //@ If there is a restaurants object present --> display table else display nothing
                                    <Restaurant restaurants={restaurants} /> : null}
                                </tbody>
                            </Table>
                        </Col>
                </Row>
            </Container>
        </div>    
    )
};

export default Restaurants;