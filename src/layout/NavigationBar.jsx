import React from 'react'
import { 
    Navbar,
    Nav,
} from 'react-bootstrap';
import logo from '../logo.png'

const NavigationBar = props => {
    return (
        <Navbar className="navigation" expand="sm">
            <Navbar.Brand href="/watch">
                <img
                    className="logo"
                    src={logo}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav className="mr-auto text-uppercase">
                <Nav.Link style={{
                    color: '#ffffff'
                }} href="/watch">Watch</Nav.Link>
                <Nav.Link style={{
                    color: '#ffffff'
                }} href="counter">Counter</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;
