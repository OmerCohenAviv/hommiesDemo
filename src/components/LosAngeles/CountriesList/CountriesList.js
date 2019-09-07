import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import CountryDisplay from './CountryDisplay/CountryDisplay';
import Communities from '../../Communities/Communities';

const countriesList = (props) => {
    let { connectedCountries, clickedCountry } = props
    console.log(clickedCountry.clicked)
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
        <Container >
            <Row >
                {countries}
            </Row>
        </Container>
    );
    if (clickedCountry.clicked) {
        display = <Communities countryName={clickedCountry.countryName} goBack={props.goBack} />
    }

    return (
        <div>
            {display}
        </div>
    );
};


export default countriesList;