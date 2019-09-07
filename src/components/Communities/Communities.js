import React from 'react';
import Israel from './Israel/Israel'
import France from './France/France'
import Germany from './Germany/Germany'

const communities = (props) => {
    console.log(props)
    let displayCommunity = 'Srry we didnt found what u are lookin for'
    if (props.countryName === 'Israel') {
        displayCommunity = <Israel goBack={props.goBack}/>
    }
    if (props.countryName === 'Germany') {
        displayCommunity = <Germany goBack={props.goBack} />
    }
    if (props.countryName === 'France') {
        displayCommunity = <France  goBack={props.goBack}/>
    }
    return (
        <div>
            {displayCommunity}
        </div>
    );
};


export default communities;