import React, {Fragment} from 'react';

import { Button } from 'react-bootstrap'
import CountryCommunity from '../../CountryCommunity/CountryCommunity';
import styled from 'styled-components';


const israel = (props) => {
    console.log(props)
    const StyledButton = styled(Button)`
    width: fit-content
    margin-bottom: 20px
    `;
    return (
        <Fragment >
            <StyledButton
                onClick={props.goBack}
                variant='warning'>
                Back to commintues LIST
                </StyledButton>
            <CountryCommunity
                toShowJobs={props.toShowJobs}
                showJobs={props.showJobs}
                planningToArive='123'
                totalPeople='340'
                sameHobbiesPeople='15'
                jobsForUser='2'

            />
        </Fragment>
    );
};

export default israel;