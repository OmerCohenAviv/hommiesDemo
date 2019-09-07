import React from 'react';

import CountryCommunity from '../CountryCommunity/CountryCommunity';
import { Button } from 'react-bootstrap';


const france = ( props ) => {
    return (
        <div>
            <Button onClick={props.goBack} variant='warning'>Back to commintues LIST</Button>
            <CountryCommunity 
            planningToArive='450'
            totalPeople='150'
            sameHobbiesPeople='4'
            jobsForUser='3'
            
            />
        </div>
    );
};

export default france;