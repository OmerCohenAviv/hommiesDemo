import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import CountryDisplay from './CountryDisplay/CountryDisplay';
import Communities from '../Communities/Communities';


const countriesList = (props) => {
    let { connectedCountries, clickedCountry } = props
    connectedCountries = Object.values(connectedCountries)
    const countries = []
    for (let country of connectedCountries) {
        countries.push(
            <Col key={country.countryName}>
                <CountryDisplay
                    click={props.click}
                    countryImage={country.countryImage}
                    countryName={country.countryName} />
            </Col>
        )
    }
    let display = (
        <Container  >
            <Row >
                {countries}
            </Row>
        </Container>
    );

    if (clickedCountry.clicked) {
        display = (
            <Communities
                toShowJobs={props.toShowJobs}
                showJobs={props.showJobs}
                countryName={clickedCountry.countryName}
                goBack={props.goBack}
            />
        );
    }
return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
        {display}
    </div>
);
};


export default countriesList;