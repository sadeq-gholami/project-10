import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Styled from 'styled-components';

const Styles = Styled.div `
    .navbar {
        background-color : #233;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;
const NavigationBar = () => (
    <Styles>
        <Navbar expand= "lg">
            <Navbar.Brand href="/">door dispay</Navbar.Brand>
            <Navbar.Toggle aria-controls= "basic-navbar-nav"/>
            <Navbar.Collapse id ="basic-navbar-nav">
                <Nav className ="ml-auto">
                    <Nav.Item><Nav.Link href ="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/About">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/Displays">Displays</Nav.Link></Nav.Item>
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
export default NavigationBar;