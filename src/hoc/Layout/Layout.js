import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css'

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar  {...this.props} />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </div>
        );
    };
};


export default Layout;