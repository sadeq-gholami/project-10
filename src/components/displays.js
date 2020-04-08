import React, { Component } from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Displays extends Component {
    state = {
        selectedDisplay: ""
      }

    handlechange =(e)=>{
        this.setState({selectedDisplay: e.target.value});
    }

    
    render() { 
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select your display</Form.Label>
                            <Form.Control as="select" onChange= {this.handlechange}>
                            <option>Display 1</option>
                            <option>Display 2</option>
                            <option>Display 3</option>
                            <option>Display 4</option>
                            <option>Display 5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Link to ="/message">
                        <Button variant="primary">select</Button>
                    </Link>
                </Container>
            </div>
         );
    }
}
 
export default Displays;