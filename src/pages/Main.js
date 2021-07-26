import React, { useState } from "react";
import Jumbo from "../components/Jumbo";
import Sample from "../components/Sample";
import image1 from "../assets/img/sample/1.jpg";
import image2 from "../assets/img/sample/2.jpg";
import image3 from "../assets/img/sample/3.jpg";
import AdCard from "../components/AdCard";
import { Container } from "reactstrap";
import Introduction from "../components/Introduction";
const Main = () => {
  return (
    <>
      <Container className="main">
        <Jumbo />
        {/* <Introduction /> */}
        <Sample image1={image1} image2={image2} image3={image3} />
        <AdCard />
      </Container>
    </>
  );
};

export default Main;
