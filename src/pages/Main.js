import React, { useState } from "react";
import Jumbo from "../components/Jumbo";
import Sample from "../components/Sample";
import image1 from "../assets/img/sample/1.jpg";
import image2 from "../assets/img/sample/2.jpg";
import image3 from "../assets/img/sample/3.jpg";
import image4 from "../assets/img/sample/4.jpg";
import image5 from "../assets/img/sample/5.jpg";
import image6 from "../assets/img/sample/6.jpg";
import image7 from "../assets/img/sample2/1.jpg";
import image8 from "../assets/img/sample2/2.jpg";
import image9 from "../assets/img/sample2/3.jpg";
import image10 from "../assets/img/sample2/4.jpg";
import image11 from "../assets/img/sample2/5.jpg";
import image12 from "../assets/img/sample2/6.jpg";
import AdCard  from "../components/AdCard";
import { Container } from "reactstrap";

const Main = () => {
  return (
    <>
      <Jumbo />
      <Container className="main">
      <Sample
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        image6={image6}
      />
      <Sample
        image1={image7}
        image2={image8}
        image3={image9}
        image4={image10}
        image5={image11}
        image6={image12}
      />
      <AdCard />
      </Container>
    </>
  );
};

export default Main;
