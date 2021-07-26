import React from "react";
import { Row, Col, Button } from "reactstrap";
import JumboPic from "../../assets/img/jumbo.jpg";
import "./Jumbo.css";
const Jumbo = () => (
  <div className="jumbo">
    <Row>
      <Col xs="12">
        <div>
          <Row>
            <Col className="jumboTitle" xs="4 m-0 p-0">
              <div className="jumboText">
                <div className="titleDiv">
                  <h4>PICNICS</h4>
                </div>
                <div className="descriptionDiv">
                  <p className="description">Luxury picnics for any occasion</p>
                </div>

                <div className="jumboButton">
                  <a href="/contact">
                    <button className="button">Book Your Picnic</button>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs="1 p-0 m-0"></Col>
            <Col className="jumboImage" xs="7 p-0 m-0">
              <img className="image-fit" src={JumboPic} />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
);

export default Jumbo;
