import React from "react";
import image1 from "../../assets/img/sample2/5.jpg";
import { Button } from "reactstrap";
import "./About.css"
const About = () => {
  return (
      <div className="aboutWrapper">
      <div className="aboutCard">
      <div className="aboutImage">
          <img src={image1} />
      </div>
        <div className="aboutTitle">
          <h3> ABOUT ME</h3>

          <p>
          My name is Hana and I’m based in Denver, Colorado. I recently discovered my passion for arranging luxury picnics and decorations after doing one for my dearest friend. I took into consideration making it more accessible for anyone so they too can have the ability to create a special memory for their loved ones. I want to thank you for supporting me in the beginning of my new journey. 
          </p>
           <a href="/contact"><Button className="button" >
           Book Your Picnics Today!
          </Button></a>
        </div>
      </div></div>
  );
};

export default About;