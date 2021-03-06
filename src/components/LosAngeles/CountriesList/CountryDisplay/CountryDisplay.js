import React from 'react';
import { Card, Button } from 'react-bootstrap';

const countriesList = (props) => {
    let display = (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.countryImage}  style={{ height:'15vw', objectFit:'cover'}}/>
            <Card.Body>
                <Card.Title> {props.countryName} </Card.Title>
                <Card.Text>
                    {props.countryDescription}
                </Card.Text>
                <Button onClick={() => props.click(props.countryName)} variant="primary"> More Information - {props.countryName} Community</Button>
            </Card.Body>
        </Card>
    )
    return (
        <div>
            {display}
        </div>
    );
};


export default countriesList;