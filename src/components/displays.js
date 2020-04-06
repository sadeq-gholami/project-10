import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
class Displays extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <h2>your Screens</h2>
                <ul>
                    <li>Screen 1</li>
                    <li>Screen 2</li>
                    <li>Screen 3</li>
                    <li>Screen 4</li>  
                </ul>
            </Container>
         );
    }
}
 
export default Displays;