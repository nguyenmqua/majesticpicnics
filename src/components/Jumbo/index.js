import React from "react";
import TopNav from "../TopNav"
import {Button} from  "reactstrap";
import JumboPic from "../../assets/img/jumbo.jpg"

const Jumbo = () =>(
    <div className="jumbo">
            <img className="jumboImage" src={JumboPic} />
            <div className="topNav">
            <TopNav /> <div className="jumboTitle">
              <h1 className="title">Majestic Picnics</h1>
              <p className="description"> -Luxury picnics for any occasion</p>
             
                <Button color="primary"><a href="/contact" >Contact Us</a></Button>
        
            </div></div>
           
    </div>
)

export default Jumbo