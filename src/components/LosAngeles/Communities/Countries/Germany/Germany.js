import React, { Fragment } from 'react';

import CountryCommunity from '../../CountryCommunity/CountryCommunity';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';

const germany = (props) => {
    const StyledButton = styled(Button)`
    width: fit-content
    margin-bottom: 20px
    `;
    return (
        <Fragment>
            <StyledButton
                style={{ float: 'left' }}
                onClick={props.goBack}
                variant='warning'>
                Back to commintues LIST
                </StyledButton>
            <CountryCommunity
                toShowJobs={props.toShowJobs}
                showJobs={props.showJobs}
                planningToArive='1230'
                totalPeople='600'
                sameHobbiesPeople='150'
                jobsForUser='10'
            />
        </Fragment>
    );
};

export default germany;