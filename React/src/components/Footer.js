import React,{Component} from "react";
import {Navbar,Col} from "react-bootstrap";


export default class Footer extends Component{
    render() {
        let fullYear = new Date().getFullYear();
        return(

            <Navbar fixed="bottom" bg="light" variant="light">
                <Col lg={12} className="text-center text-muted">
                  <div>{fullYear} ShooStore Inc.  </div>
                </Col>

            </Navbar>
        );
    }
}
