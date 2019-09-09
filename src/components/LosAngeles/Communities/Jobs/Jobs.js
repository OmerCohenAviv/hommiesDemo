import React from 'react';

import { ListGroup } from 'react-bootstrap'

const jobs = () => {
    return (
        <ListGroup as="ul" style={{ marginLeft: '20px' }}>
            <ListGroup.Item as="li" active>
                Jobs we found intersting 
            </ListGroup.Item>
            <ListGroup.Item as="li">
                Phones Selling
                </ListGroup.Item>
            <ListGroup.Item as="li" disabled>  
                Gym instructor  
            </ListGroup.Item>
            <ListGroup.Item as="li">
                Uber Driver
            </ListGroup.Item>
        </ListGroup>
    );
};

export default jobs;