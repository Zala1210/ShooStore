import React, {Component} from "react";

import {Card,Form,Button,Col} from 'react-bootstrap';
import axios from 'axios';

export default class Shoe extends Component{
    constructor(props) {
        super(props);
        this.state = this.initalState;
        this.shoeChange = this.shoeChange.bind(this);
        this.submitShoe = this.submitShoe.bind(this);

    }

    initalState = {
        name:'',rating:'',image_url:''
    }

    resetShoe = () =>{
        this.setState(() => this.initalState);
    }
    submitShoe = event =>{

        event.preventDefault();

            const shoe = {
                name: this.state.name,
                rating: this.state.rating,
                image_url: this.state.image_url


            };

        axios.post("http://localhost:8082/shoes/add", shoe)
            .then(response => {
                console.log(response.data);
                if(response.data != null) {
                    this.setState(this.initalState);
                    alert("Shoe saved succesfully");
                }
            });
    }
    shoeChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render() {
        const {name,rating,image_url}  = this.state;
        return(

            <Card className="border border-white bg-white text-dark">
                <Card.Header>ADD SHOE</Card.Header>

                    <Form id="shoeFormId" onSubmit={this.submitShoe} onReset={this.resetShoe}>
                        <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required autoComplete="off"
                                    name="name"
                                    type="text"
                                    value={name} onChange={this.shoeChange}
                                    placeholder="Type Shoe Name"
                                    className={"bg-white text-dark"}/>

                            </Form.Group> 
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridrating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control required autoComplete="off"
                                              name="rating"
                                              type="text"
                                              value={rating} onChange={this.shoeChange}
                                              placeholder="Type Shoe Rating"
                                              className={"bg-white text-dark"}/>

                            </Form.Group>
                    </Form.Row>
                    <Form.Row>
                            <Form.Group as={Col} controlId="formGridrImageUrl">
                                <Form.Label>Shoe Image Link</Form.Label>
                                <Form.Control required autoComplete="off"
                                              name="image_url"
                                              type="text"
                                              value={image_url} onChange={this.shoeChange}
                                              placeholder="Add Shoe Image Link"
                                              className={"bg-dark text-white"}/>

                            </Form.Group>
                    </Form.Row>
                    </Card.Body>
                        <Card.Footer style={{"textAlign" : "right"}}>
                            <Button size="sm" variant="success" type="submit">
                                    Apply
                            </Button>{' '}
                            <Button size="sm" variant="danger" type="reset">
                                    Undo
                            </Button>
                        </Card.Footer>

                    </Form>

            </Card>
        );
    }
}
