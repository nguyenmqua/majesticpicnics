import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Card, CardImg } from "reactstrap";
import "./Image.css"
const ModalExample = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Card onClick={toggle} className="galleryCard" id={props.id}>
        <CardImg className="cardImg" top src={props.src} alt="Picnic" />
      </Card>
      <Modal isOpen={modal} fade={true} toggle={toggle}>
        <ModalBody>
          <img src={props.src} />
        </ModalBody>

        <ModalFooter>
          <a href="/contact">
            <Button className="button">Book Your Picnics Today!</Button>
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
