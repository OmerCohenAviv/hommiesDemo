import React from 'react';

import CountryCommunity from '../CountryCommunity/CountryCommunity';
import { Button } from 'react-bootstrap'

const germany = (props) => {
    return (
        <div>
            <Button onClick={props.goBack} variant='warning'>Back to commintues LIST</Button>
            <CountryCommunity
                planningToArive='1230'
                totalPeople='600'
                sameHobbiesPeople='150'
                jobsForUser='10'

            />
        </div>
    );
};

export default germany;