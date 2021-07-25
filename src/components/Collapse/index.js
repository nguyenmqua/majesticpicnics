import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./Collapse.css"
const Collapses = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <div>
      <Button className="button collapseButton" onClick={toggle} block>{props.question}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="collapseBody">
          {props.answer}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Collapses;
