import React, { useState } from "react";
import TopNav from "../components/TopNav"
import {
  Container,
  Row,
  Col,
  Button,
  Label,
  FormGroup,
  Input,
  FormText,
  Form,
  Modal,
  ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import  Carousel  from "../components/Carousel";

function Contact(props) {
  return (
    <>
    <TopNav />
    <Carousel />
    
    <iframe className="form" src="https://docs.google.com/forms/d/e/1FAIpQLSfzl3y-oA9Dt_h4HOa_hiodMhTy8Ikor5gTRMLkDX7KyepzJw/viewform?embedded=true" width="100%" height="1100px" frameborder="0" marginheight="5%" marginwidth="0">Loading…</iframe>
    
      
    </>  
  );
}

export default Contact;
