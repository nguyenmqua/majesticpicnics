import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "./Collapse.css";
const Collapses2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button className="button collapseButton" onClick={toggle} block>
      What is the cancellation/ reschedule policy?
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="collapseBody">
            <p>
             My cancellation policy is that the 50% deposit will be non-refundable due to the fact that I plan every picnic accordingly and at times I have to purchase certain items that may not be available on sight. Majestic Picnics is not responsible for refunding the full amount of deposit.
            </p>{" "}
            <p>
              {" "}
              A 50% deposit is required to secure the date and the full amount must be paid upon arrival. I cannot guarantee a spot if the deposit hasn’t been made. 
            </p>
            <p>
              
The picnic is held for 2 hours. If you surpass the hour there will be an additional $40 fee. 
            </p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Collapses2;