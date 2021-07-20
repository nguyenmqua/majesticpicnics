import React, { useState } from "react";
import Jumbo from "../components/Jumbo";
import Sample from "../components/Sample";
import image1 from "../assets/img/sample/IMG_0181.jpg";
import image2 from "../assets/img/sample/IMG_0193.jpg";
import image3 from "../assets/img/sample/IMG_0225.jpg";
import image4 from "../assets/img/sample/IMG_0249.jpg";
import image5 from "../assets/img/sample/IMG_0258.jpg";
import image6 from "../assets/img/sample2/IMG_0106.jpg";
import image7 from "../assets/img/sample2/IMG_0122.jpg";
import image8 from "../assets/img/sample2/IMG_0133.jpg";
import image9 from "../assets/img/sample2/IMG_0158.jpg";
import image10 from "../assets/img/sample2/IMG_0162.jpg";
import image11 from "../assets/img/sample2/IMG_9978.jpg";
import AdCard  from "../components/AdCard";

const Main = () => {
  return (
    <>
      <Jumbo />
      <Sample
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        image6={image1}
      />
      <Sample
        image1={image6}
        image2={image7}
        image3={image8}
        image4={image9}
        image5={image10}
        image6={image11}
      />
      <AdCard />

    </>
  );
};

export default Main;
