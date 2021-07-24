import React from "react";
import { Col, Row } from "reactstrap";
import "./Sample.css";
const Sample = (props) => (
  <div className="example">
    <Row>
      <Col sm="12">
        <img className="examplePic" src={props.image1} />
        <img className="examplePic" src={props.image2} />
        <img className="examplePic" src={props.image3} />
      </Col>
    </Row>
  </div>
);

export default Sample;
