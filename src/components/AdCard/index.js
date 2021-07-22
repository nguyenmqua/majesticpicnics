import React from "react";
import image1 from "../../assets/img/sample2/1.jpg";
import { Button } from "reactstrap";

const AdCard = () => {
  return (
      <div className="adWrapper">
      <div className="adCard">
      <div className="adImage">
          <img src={image1} />
      </div>
        <div className="adTitle">
          <h3> BRING YOUR VISON TO LIFE </h3>

          <p>
            From birthdays, baby showers, bachelorette, bridal shower, propsal,
            engagement party, anniversaries and more!
          </p>
          <Button className="button" >
            <a href="/contact">Book Your Picnics Today!</a>
          </Button>
        </div>
      </div></div>
  );
};

export default AdCard;
