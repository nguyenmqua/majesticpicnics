import React, { useState } from "react";

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
