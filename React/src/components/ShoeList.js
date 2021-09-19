import React, {Component}from "react";
import {Card,Table,ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog,faTimes} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class ShoeList extends Component{
    constructor(props) {
        super(props);
        this.state={
          shoes:[],
          isAdmin: false
        };
    }

    componentDidMount() {
        this.findAllShoes();
        if(sessionStorage.getItem("isAdmin") == "true"){
            this.setState({isAdmin:true});
        }
    }
    componentWillUnmount(){
        this.findAllShoes();
    }


    findAllShoes(){
        axios.get("http://localhost:8082/shoes/all")
            .then(response => response.data)
            .then((data) => {
                this.setState({shoes:data})
            });
    }
    fetchDetails(a) {
        console.log(a.id)
        this.props.history.push('page?id='+a.id)
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

            <Card className="border border-dark bg-white text-dark">
               <Card.Header> SHOE LIST</Card.Header>
               <Card.Body>
                   <Table bordered hover striped variant="white">
                       <thead>
                       <tr>
                           <th>Name</th>
                           <th>Rated</th>
                           <th>Edit/Delete</th>
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
                                            <Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCog} /></Button>
                                            <Button size="sm" variant="outline-danger" onClick={() => this.deleteShoe(shoe.id)}><FontAwesomeIcon icon={faTimes} /></Button>
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

            <Card  className="border border-dark bg-white text-dark">
                <Card.Header> SHOE LIST</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="white">
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
 
                                     <td>
                                         
                                         {shoe.name}
                                     </td>

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
