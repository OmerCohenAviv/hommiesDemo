import React from 'react';
import { Button } from 'react-bootstrap'

const countryCommunity = ( props ) => {
    return (
        <div>
            <p>Total People - {props.totalPeople} </p> 
            <p>Planning To Arive - {props.planningToArive}</p>
            <p>Same Hobbies With  - {props.sameHobbiesPeople} People <Button>Contact Them!</Button></p>
            <p>You Have {props.jobsForUser} Jobs Next to you <Button> Click here to check them out!</Button></p>
            
        </div>
    );
};


export default countryCommunity;