import React from "react";
import {Container, Col, Row} from  "reactstrap";

const Sample = (props) =>(
    
    <div className="example">
        <Container>
        <Col sm="12">
          <Row>
            <img className = "examplePic" src ={props.image1} />
            <img className = "examplePic" src ={props.image2} />
            <img className = "examplePic" src ={props.image3} />

          </Row>
          <Row>
          <img className = "examplePic" src ={props.image4} />
          <img className = "examplePic" src ={props.image5} />
          <img className = "examplePic" src ={props.image6} />
            </Row>
        </Col>
      </Container>
      </div>
)

export default Sample