import React, { Component } from 'react';

import Title from '../../components/LosAngeles/Title/Title'
import CountriesList from '../../components/LosAngeles/CountriesList/CountriesList';
import israelPicture from '../../components/LosAngeles/Assets/Countries/Pictures/tel-aviv-cityscape-468bb6766ca3.jpg';
import francePicture from '../../components/LosAngeles/Assets/Countries/Pictures/photo-1431274172761-fca41d930114.jpg';
import germanyPicture from '../../components/LosAngeles/Assets/Countries/Pictures/4ca098f1ea04ab595d7fe337d1af947f44556b2fadf9a0111c843ba2055d324d.jpg';

class LosAngeles extends Component {
    state = {
        connectedCountries: {
            Israel: {
                countryName: 'Israel',
                countryImage: israelPicture
            },
            France: {
                countryName: 'France',
                countryImage: francePicture

            },
            Germany: {
                countryName: 'Germany',
                countryImage: germanyPicture
            },
        },
        clickedCountry: {
            clicked: false,
            countryName: ''
        },
        showJobs: false,
    };

    clickedCountryHandler = (countryName) => {
        const clickedCountryUpdated = {
            ...this.state.clickedCountry,
            clicked: true,
            countryName: countryName
        };
        this.setState({ clickedCountry: clickedCountryUpdated })
    };

    goBackHandler = () => {
        const clickedCountryUpdated = { ...this.state.clickedCountry, clicked: false }
        this.setState({ clickedCountry: clickedCountryUpdated, showJobs: false })
    };

    showJobsHandler = () => {
        this.setState({showJobs: true,})
    }

    render() {
        const { connectedCountries, clickedCountry } = this.state

        return (
            <div>
                <Title />
                <CountriesList
                    toShowJobs={this.state.showJobs}
                    showJobs={this.showJobsHandler}
                    goBack={this.goBackHandler}
                    clickedCountry={clickedCountry}
                    click={this.clickedCountryHandler}
                    connectedCountries={connectedCountries} />
            </div>
        );
    };
};


export default LosAngeles;