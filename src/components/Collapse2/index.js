import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "./Collapse.css";
const Collapses2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button className="button collapseButton" onClick={toggle} block>
        Refund Policy
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="collapseBody">
            <p>
              {" "}
              A 50% deposit is required to secure the date and the full amount
              must be paid upon arrival. I cannot promise a spot if the deposit
              hasn’t been made.
            </p>{" "}
            <p>
              {" "}
              72hr cancellation notice for a partial refund. If I do not receive
              a notice your deposit will be nonrefundable.{" "}
            </p>
            <p>
              {" "}
              The picnic is held for 2 hours. If you surpass the hour there will
              be an additional $40 fee
            </p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Collapses2;
