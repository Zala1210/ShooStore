
import React, { Component } from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare, faSave} from "@fortawesome/free-solid-svg-icons";
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';



 export default class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = this.initalState;
        this.userChange = this.userChange.bind(this);
        this.login = this.login.bind(this);

    }
    initalState = {
        username:'', password:'',
        redirect:false
    }
 
    login(){
        if(this.state.username && this.state.password){
            PostData('/login',this.state).then((result)=>{
                let responseJSON = result;
              
                if(responseJSON){
                    console.log(responseJSON);
                    sessionStorage.setItem('userData',responseJSON);
                    sessionStorage.setItem('user_id',responseJSON.id);
                    sessionStorage.setItem('email',responseJSON.email);
                    sessionStorage.setItem('username',responseJSON.username);
                    sessionStorage.setItem('password',responseJSON.password);
                    sessionStorage.setItem('token',responseJSON.token);
                    sessionStorage.setItem('group_id',responseJSON.group_id);
                    if(responseJSON.group_id == 1){
                        sessionStorage.setItem('isAdmin',true);
                    }else{
                        sessionStorage.setItem('isAdmin',false);
                    } 
                    


                    this.setState({redirect:true});
                    window.location.reload(false);
                }else{
                    console.log("Login error");
                }
                //console.log(responseJson)
            });
        }
        
       
    }
    userChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        const {username,password}  = this.state;
        if(sessionStorage.getItem("userData")){
            return(<Redirect to={'/'}/>)
        }
        if(this.state.redirect){
            return(<Redirect to={'/'}/>)
        }
       
        return (
            <Card className="border border-dark bg-light text-dark">
                <Card.Header> LOGIN HERE:</Card.Header>

                <Form id="loginFormId" >
                    <Card.Body>

                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>USERNAME: </Form.Label>
                                <Form.Control required autoComplete="off"
                                            name="username"
                                            type="text"
                                            value={username} onChange={this.userChange}
                                            placeholder="Enter Username"
                                            className={"bg-light text-dark"}/>

                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>PASSWORD: </Form.Label>
                                <Form.Control required autoComplete="off"
                                            name="password"
                                            type="password" 
                                            value={password}  onChange={this.userChange}
                                            placeholder="Enter Password"
                                            className={"bg-light text-dark"}/>

                            </Form.Group>


                    </Card.Body>
                    <Card.Footer style={{"textAlign" : "center"}}>
                        <Button size="sm" variant="danger" onClick={this.login}  >
                             LOGIN
                        </Button>{' '}
                        
                    </Card.Footer>

                </Form>

            </Card>
        );
    }


}


