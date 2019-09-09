import React, { Fragment } from 'react';

import CountryCommunity from '../../CountryCommunity/CountryCommunity';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';


const france = (props) => {
    const StyledButton = styled(Button)`
    width: fit-content
    margin-bottom: 20px
    `;
    return (
        <Fragment>
            <StyledButton
                onClick={props.goBack}
                variant='warning'>
                Back to commintues LIST
                  </StyledButton>
            <CountryCommunity
                toShowJobs={props.toShowJobs}
                showJobs={props.showJobs}
                planningToArive='450'
                totalPeople='150'
                sameHobbiesPeople='4'
                jobsForUser='3'

            />
        </Fragment>
    );
};

export default france;