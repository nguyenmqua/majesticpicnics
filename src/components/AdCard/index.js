import React from "react";
import image1 from "../../assets/img/sample2/1.jpg";
import { Button } from "reactstrap";
import "./AdCard.css";
import { Link } from 'react-router-dom';

const AdCard = () => {
  return (
    <div className="adWrapper">
      <div className="adCard">
        <div className="adImage">
          <img src={image1} />
        </div>
        <div className="adTitle">
          <h3> BRING YOUR VISION TO LIFE </h3>
          <p>
            From birthdays, baby showers, bachelorette, bridal shower, propsal,
            engagement party, anniversaries and more!
          </p>
          <Link to="/contact">
            <Button className="button">Book Your Picnics Today!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
