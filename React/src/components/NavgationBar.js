import React, {Component} from "react";
import {Navbar, Nav, FormControl, Button, Form, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class NavigationBar extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            logged : false,
            isAdmin: false
        }
        
        //this.doLogout = this.doLogout.bind(this);
    }

     doLogout(){
       
          
                /*this.state.isLoggedIn = false;
                UserStore.isLoggedIn = false;
                UserStore.username = '';*/
                
                sessionStorage.setItem("userData",'')
                sessionStorage.clear();
                this.setState({logged:false});
                //this.setState({ redirect: "/login" });
                window.location.reload(false);
          
      
    }
    componentDidMount(){
        if(sessionStorage.getItem("userData")){
           
            this.setState({logged:true});
            if(sessionStorage.getItem("isAdmin") == "true"){
                this.setState({isAdmin:true});
            }
        }

    }
  
    
  
    
    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/search'); // <--- The page you want to redirect your user to.
    }
    
    render() {
        console.log(sessionStorage.getItem("isAdmin"));
        if(sessionStorage.getItem("username")){
           if(this.state.isAdmin == true) {
           
                return (

                    <Navbar bg="light" variant="light">
                        <Link to={""} className="navbar-brand">
                            <h2>{sessionStorage.getItem("username")}</h2>
                        </Link>
    
                        <Nav className="mr-auto">

                            <img src="https://i.pinimg.com/originals/1b/a3/60/1ba360833e7f1c8e457b4bc08992f119.png" width="40" height="30" alt="shoo"/>ShooStore



                           
    
                        </Nav>
                        <Nav className="mr-auto">



                            <Link to={"list"} className="nav-link" > SHOES </Link>
                            <Link to={"add"} className="nav-link" > ADD SHOES</Link>



                        </Nav>
                      
                        
                      
                       
                        <Form inline action="/search">
                            <FormControl type="text" placeholder="SEARCH..." className="mr-sm-2" name="name"/>
                            <Button variant="primary-outline" type="submit">SUBMIT</Button>
                        </Form>
                        <br></br>
                        <Button variant="danger"  className="mr-sm-2" onClick={ () => this.doLogout() } >LOG OUT</Button>
                    </Navbar>
                );
            }else{
                return (

                    <Navbar bg="light" variant="light">
                        <Link to={""} className="navbar-brand">
                            <h2>{sessionStorage.getItem("username")}</h2>
                        </Link>
    
                        <Nav className="mr-auto">
                            <img src="https://i.pinimg.com/originals/1b/a3/60/1ba360833e7f1c8e457b4bc08992f119.png" width="40" height="30" alt="shoo"/>ShooStore
                        </Nav>
                        <Nav className="mr-auto">



                            <Link to={"list"} className="nav-link" > SHOES </Link>




                        </Nav>
                        <Form inline action="/search">
                            <FormControl type="text" placeholder="SEARCH..." className="mr-sm-2" name="name"/>
                            <Button variant="danger-outline" type="submit">SUBMIT</Button>
                        </Form>
                        <Button variant="danger"  className="mr-sm-2" onClick={ () => this.doLogout() } >LOG OUT</Button>
                    </Navbar>
                );
                }
            
        }else{
            return (

                <Navbar bg="light" variant="light">
                    <Link to={""} className="navbar-brand">
                        <img src="https://i.pinimg.com/originals/1b/a3/60/1ba360833e7f1c8e457b4bc08992f119.png" width="40" height="30" alt="brand"/>ShooStore
                    </Link>
    
                    <Nav className="mr-auto">
                        <Link to={"list"} className="nav-link" > SHOES</Link>




                    </Nav>
                    <Nav className="mr-auto">


                        <Link to={"login"} className="nav-link" >LOGIN</Link>
                        <Link to={"register"} className="nav-link" >REGISTER</Link>





                    </Nav>

                    <Form inline action="/search">
                        <FormControl type="text" placeholder="SEARCH..." className="mr-sm-2" name="name"/>
                        <Button variant="danger" type="submit">SUBMIT</Button>
                    </Form>
                </Navbar>
            );
        }
        
    }





}

