import React, {Component}from "react";
import {Card,Table, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList,faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import queryString from 'query-string';
import {Redirect} from 'react-router-dom';
export default class ShoeSearchList extends Component{
    constructor(props) {
        super(props);
        this.state={
            shoes:[],
            isAdmin: false
        };
        let params = queryString.parse(this.props.location.search)
        //console.log(params);
        this.fetchDetails = this.fetchDetails.bind(this);
    }

    componentWillMount() {
        this.findAllShoes();
        if(sessionStorage.getItem("isAdmin") == "true"){
            this.setState({isAdmin:true});
        }
    }
    componentWillUnmount(){
        this.findAllShoes();
    }
    fetchDetails(a) {
        console.log(a.id)
        this.props.history.push('page?id='+a.id)
    }

    findAllShoes(){

        let params = queryString.parse(this.props.location.search).name


        console.log(params)

        axios.post("http://localhost:8082/shoes/name",params)
            .then(response => response.data)
            .then((data) => {
                this.setState({shoes:data})
            });
    }
 deleteShoe(id){
    axios.delete("http://localhost:8082/shoes/delete/"+id)
    .then(response => response.data)
    .then((data) => {
        this.setState({shoes:data})
        this.props.history.push('/list')
    });
    
}
    render() {
        
        if(this.state.isAdmin == true) {
            return(
    
               <Card className="border border-white bg-white text-dark">
                   <Card.Header><FontAwesomeIcon icon={faList} /> SHOE LIST</Card.Header>
                   <Card.Body>
                       <Table bordered hover striped variant="light">
                           <thead>
                           <tr>
                               <th>Name</th>
                               <th>Rating</th>
                               <th>Actions</th>
                           </tr>
                           </thead>
                           <tbody>
                           {this.state.shoes.length === 0 ?
                               <tr align="center">
                                   <td colSpan="6">{this.state.shoes.length} Shoes: </td>
    
                               </tr> :
                               this.state.shoes.map((shoe) =>(
                                    <tr key={shoe.id}  onClick={() => this.fetchDetails(shoe)}>
    
                                        <td>
                                            
                                            {shoe.name}
                                        </td>
                                        <td>{shoe.rating}</td>
    
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>
                                                <Button size="sm" variant="outline-danger" onClick={() => this.deleteShoe(shoe.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                            </ButtonGroup>
                                        </td>
    
    
                                    </tr>
                               ))
                           }
                           </tbody>
                       </Table>
                   </Card.Body>
               </Card>
            );
        }else{
            return(
    
                <Card className="border border-white bg-white text-dark">
                    <Card.Header><FontAwesomeIcon icon={faList} /> SHOE LIST</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="light">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rating</th>
                               
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.shoes.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">{this.state.shoes.length} Shoes: </td>
     
                                </tr> :
                                this.state.shoes.map((shoe) =>(
                                     <tr key={shoe.id}  onClick={() => this.fetchDetails(shoe)}>
     
                                         <td>{shoe.name}</td>
                                         <td>{shoe.rating}</td>
     
                                       
     
     
                                     </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
             );
        }
        }
}
