import React from 'react';

import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => {
    return (
        <Navbar bg="dark" variant="dark" style={{width:'100%'}}>
            <Nav activeKey="1" >
                <Nav.Item>
                    <NavLink to='/' className="nav-link" activeClassName='nav-link active' exact>
                        Los Angeles City
                     </NavLink>
                </Nav.Item>
                <NavDropdown title="Citys" id="nav-dropdown" >
                    <NavLink to='/Israel' className='dropdown-item' exact >
                        Israel
                     </NavLink>
                    <NavLink to='/France' className='dropdown-item' exact>
                        France
                     </NavLink>
                    <NavLink to='/Germany' className='dropdown-item' exact>
                        Germany
                    </NavLink>
                </NavDropdown>

            </Nav>
        </Navbar>
    );
}


export default toolbar;