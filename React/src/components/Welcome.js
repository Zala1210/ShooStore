import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";

export default class Welcome extends Component{
    render() {
        return (
            <Jumbotron className="bg-light text-dark">
                <h1>"ShooStore"</h1>
               <blockquote className="blockquote mb-0">
                   <p>
                   “Welcome to ShooStore, site made for sneakerheads. Enjoy your time here where we discuss about sneakers, rate them and hopefully in the future add the shop in order to buy them!”
                   </p>
               </blockquote>
                <img src="https://i.pinimg.com/originals/25/ef/83/25ef8349a248943b1a3cd21d68447ee9.jpg" width="1080" height="1080" alt="shoo"/>
            </Jumbotron>

        );
}
}

