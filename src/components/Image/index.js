import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import "./Image.css"
const Example = (props) => {
  const items = [
    {
      pic: "./images/Gallery/22.jpg",
      caption: "Angelic Green",
    },
    {
      pic: "./images/Gallery/23.jpg",
      caption: "Angelic Green",
    },
    {
      pic: "./images/Gallery/24.jpg",
      caption: "Angelic Green",
    },
    {
      pic: "./images/Gallery/20.jpg",
      caption: "Back to Black",
    },
    {
      pic: "./images/Gallery/21.jpg",
      caption: "Back to Black",
    },
    {
      pic: "./images/Gallery/black.jpg",
      caption: "Back to Black",
    },
    {
      pic: "./images/Gallery/26.jpg",
      caption: "Pretty in Pink",
    },
    {
      pic: "./images/Gallery/27.jpg",
      caption: "Pretty in Pink",
    },
    {
      pic: "./images/Gallery/28.jpg",
      caption: "Pretty in Pink",
    },
    {
      pic: "./images/Gallery/redblack.jpg",
      caption: "Anniversary Set Up (Black and Red)",
    },
    {

      pic: "./images/Gallery/redblack2.jpg",
      caption: "Anniversary Set Up (Black and Red)",
    },
    {

      pic: "./images/Gallery/redblack3.jpg",
      caption: "Anniversary Set Up (Black and Red)",
    },
    {

      pic: "./images/Gallery/redblack4.jpg",
      caption: "Anniversary Set Up (Black and Red)",
    },
    {

      pic: "./images/Gallery/dreampurple.jpg",
      caption: "Dream Purple",
    },
    {

      pic: "./images/Gallery/dreampurple2.jpg",
      caption: "Dream Purple",
    },
    {

      pic: "./images/Gallery/dreampurple3.jpg",
      caption: "Dream Purple",
    },
    {

      pic: "./images/Gallery/golddigger.jpg",
      caption: "Gold Digger",
    },
    {

      pic: "./images/Gallery/golddigger2.jpg",
      caption: "Gold Digger",
    },
    {

      pic: "./images/Gallery/boho.jpg",
      caption: "Boho Vibes",
    },
    {

      pic: "./images/Gallery/boho2.jpg",
      caption: "Boho Vibes",
    },
    {

      pic: "./images/Gallery/2.jpg",
      caption: "Boho Vibes",
    },
    {

      pic: "./images/Gallery/3.jpg",
      caption: "Boho Vibes",
    },
    {

      pic: "./images/Gallery/4.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {

      pic: "./images/Gallery/5.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {

      pic: "./images/Gallery/6.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {

      pic: "./images/Gallery/7.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {

      pic: "./images/Gallery/1.jpg",
      caption: "Real Teal",
    },
    {

      pic: "./images/Gallery/8.jpg",
      caption: "Real Teal",
    },
    {

      pic: "./images/Gallery/9.jpg",
      caption: "Real Teal",
    },
    {

      pic: "./images/Gallery/10.jpg",
      caption: "Real Teal",
    },
    {

      pic: "./images/Gallery/11.jpg",
      caption: "Customized",
    },
    {

      pic: "./images/Gallery/12.jpg",
      caption: "Customized",
    },
    {

      pic: "./images/Gallery/13.jpg",
      caption: "Customized",
    },
    {

      pic: "./images/Gallery/14.jpg",
      caption: "Customized",
    },
    {

      pic: "./images/Gallery/15.jpg",
      caption: "Customized",
    },
    {

      pic: "./images/Gallery/17.jpg",
      caption: "Feeling Blue",
    },
    {

      pic: "./images/Gallery/18.jpg",
      caption: "Feeling Blue",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.pic}
      >
        <img className="carouselImage" src={item.pic}  />
        <div className="captions">{item.caption}</div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
