import React from 'react';

import { Button } from 'react-bootstrap'
import CountryCommunity from '../CountryCommunity/CountryCommunity';

const israel = (props) => {
    return (
        <div>
            <Button onClick={props.goBack} variant='warning'>Back to commintues LIST</Button>
            <CountryCommunity
                planningToArive='123'
                totalPeople='340'
                sameHobbiesPeople='15'
                jobsForUser='2'

            />
        </div>
    );
};

export default israel;