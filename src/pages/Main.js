import React, { useState } from "react";
import Jumbo from "../components/Jumbo";
import Sample from "../components/Sample";
import image1 from "../assets/img/sample/1.jpg";
import image2 from "../assets/img/sample/2.jpg";
import image3 from "../assets/img/sample/3.jpg";
import AdCard from "../components/AdCard";
import { Container } from "reactstrap";
import About from "../components/About"
import JumboCard from "../components/jumboCard";
const Main = () => {
  return (
    <>
      <Container className="main">
        <JumboCard />
        <AdCard />
        <About />
      </Container>
    </>
  );
};

export default Main;
