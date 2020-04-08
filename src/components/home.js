import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'react-bootstrap';
import ModalPop from '../presentation/modalPop';
class Home extends Component {
    state = { 
        message: ""
     }
    closePopup= (e)=>{
        const node = ReactDOM.findDOMNode(this);
        node.querySelector('#bg-modal').style.display = 'none';
    } 

    handlechange =(e)=>{
        this.setState({message: e.target.value});
    }

    handleSubmit=(e)=>{
        
        let data = {id: "5e8c8382c5c0f600242851f4", message: this.state.message}
        fetch('https://iot-display.herokuapp.com/message/set', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        }).then(response => {
           return response.json();
        }).then(data => data).catch(error => console.error('error', error));
        
    }
    render() { 
        return ( 
            <div>
                <ModalPop closePopup={this.closePopup}
                handleSubmit= {this.handleSubmit} 
                props = {{title: 'message', body: 'enter the message', button: 'send message' }}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter the message here</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.handlechange} />
                    </Form.Group>
                </ModalPop>
            </div>
         );
    }
}
 
export default Home;