import React, { Fragment } from 'react';
import Israel from './Countries/Israel/Israel';
import France from './Countries/France/France';
import Germany from './Countries/Germany/Germany';

const communities = (props) => {
    let displayCommunity = 'Srry we didnt found what u are lookin for'
    if (props.countryName === 'Israel') {
        displayCommunity = <Israel
            showJobs={props.showJobs}
            toShowJobs={props.toShowJobs}
            goBack={props.goBack} />
    }
    if (props.countryName === 'Germany') {
        displayCommunity = <Germany
            showJobs={props.showJobs}
            toShowJobs={props.toShowJobs}
            goBack={props.goBack} />
    }
    if (props.countryName === 'France') {
        displayCommunity = <France
            showJobs={props.showJobs}
            toShowJobs={props.toShowJobs}
            goBack={props.goBack} />
    }
    return (
        <Fragment>
            <h4>{props.countryName} Community </h4>
            {displayCommunity}
        </Fragment>

    );
};


export default communities;