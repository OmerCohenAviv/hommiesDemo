import React, { Component } from 'react';

import './App.css';
import LosAngeles from './containers/CountriesHosting/LosAngeles/LosAngeles';
import Israel from './containers/CountriesHosting/Israel/Israel';
import France from './containers/CountriesHosting/France/France';
import Germany from './containers/CountriesHosting/Germany/Germany';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path='/' exact component={LosAngeles}     />
        <Route path='/Israel' exact component={Israel}   />
        <Route path='/France' exact component={France}   />
        <Route path='/Germany' exact component={Germany} />
      </Switch>
    );

    return (
      <div className="App">
        <Layout >
          {routes}
        </Layout>

      </div>
    )
  }
};





export default App;
