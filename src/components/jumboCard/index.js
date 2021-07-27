import React from "react";
import image1 from "../../assets/img/jumbo2.jpg";
import { Button } from "reactstrap";
import "./JumboCard.css"
const jumboCard = () => {
  return (
      <div className="jumboWrapper">
      <div className="jumboCard">
      <div className="jumboImage">
          <img src={image1} />
      </div>
        <div className="jumboTitle">
          <h3>PICNICS</h3>
           <a href="/contact"><Button className="button" >
           Book Your Picnics Today!
          </Button></a>
        </div>
      </div></div>
  );
};

export default jumboCard;