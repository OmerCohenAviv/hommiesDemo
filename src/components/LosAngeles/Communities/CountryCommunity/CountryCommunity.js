import React from 'react';

import Jobs from '../Jobs/Jobs';
import { Button, Card, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons'

const countryCommunity = (props) => {
    const styles = {
        textAlign: 'left',
        display: 'flex'
    };
    let jobs = null
    if (props.toShowJobs) {
        jobs = <Jobs />
    };

    return (
        <div style={{ ...styles }} >
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        Total People - {props.totalPeople}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Planning To Arive - {props.planningToArive}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Same Hobbies With  - {props.sameHobbiesPeople} People
                        <Button >Contact Them! <FontAwesomeIcon icon={faUserFriends} /></Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        You Have {props.jobsForUser} Jobs Next to you
                        <Button
                            onClick={props.showJobs}
                            style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                            Click here to check them out! <FontAwesomeIcon icon={faPeopleCarry} />
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            {jobs}
        </div>

    );
};


export default countryCommunity;