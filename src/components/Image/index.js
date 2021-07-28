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
      id: 1,
      pic: "./images/Gallery/22.jpg",
      caption: "Angelic Green",
    },
    {
      id: 2,
      pic: "./images/Gallery/23.jpg",
      caption: "Angelic Green",
    },
    {
      id: 3,
      pic: "./images/Gallery/24.jpg",
      caption: "Angelic Green",
    },
    {
      id: 4,
      pic: "./images/Gallery/20.jpg",
      caption: "Back to Black",
    },
    {
      id: 5,
      pic: "./images/Gallery/21.jpg",
      caption: "Back to Black",
    },
    {
      id: 6,
      pic: "./images/Gallery/26.jpg",
      caption: "Pretty in Pink",
    },
    {
      id: 7,
      pic: "./images/Gallery/27.jpg",
      caption: "Pretty in Pink",
    },
    {
      id: 8,
      pic: "./images/Gallery/28.jpg",
      caption: "Pretty in Pink",
    },
    {
      id: 9,
      pic: "./images/Gallery/redblack.jpg",
      caption: "Anniversary Set Up (Black and Red)",
    },
    {
      id: 10,
      pic: "./images/Gallery/redblack2.jpg",
      caption: "Anniversary Set Up (Black and Red)",
    },
    {
      id: 11,
      pic: "./images/Gallery/redblack3.jpg",
      caption: "Anniversary Set Up (Black and Red)",
    },
    {
      id: 12,
      pic: "./images/Gallery/dreampurple.jpg",
      caption: "Dream Purple",
    },
    {
      id: 13,
      pic: "./images/Gallery/dreampurple2.jpg",
      caption: "Dream Purple",
    },
    {
      id: 14,
      pic: "./images/Gallery/golddigger.jpg",
      caption: "Gold Digger",
    },
    {
      id: 15,
      pic: "./images/Gallery/golddigger2.jpg",
      caption: "Gold Digger",
    },
    {
      id: 16,
      pic: "./images/Gallery/boho.jpg",
      caption: "Boho Vibes",
    },
    {
      id: 17,
      pic: "./images/Gallery/2.jpg",
      caption: "Boho Vibes",
    },
    {
      id: 18,
      pic: "./images/Gallery/3.jpg",
      caption: "Boho Vibes",
    },
    {
      id: 19,
      pic: "./images/Gallery/4.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {
      id: 20,
      pic: "./images/Gallery/5.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {
      id: 21,
      pic: "./images/Gallery/6.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {
      id: 22,
      pic: "./images/Gallery/7.jpg",
      caption: "Summer Days(Blue and Yellow)",
    },
    {
      id: 23,
      pic: "./images/Gallery/1.jpg",
      caption: "Real Teal",
    },
    {
      id: 24,
      pic: "./images/Gallery/8.jpg",
      caption: "Real Teal",
    },
    {
      id: 25,
      pic: "./images/Gallery/9.jpg",
      caption: "Real Teal",
    },
    {
      id: 26,
      pic: "./images/Gallery/10.jpg",
      caption: "Real Teal",
    },
    {
      id: 27,
      pic: "./images/Gallery/11.jpg",
      caption: "Customized",
    },
    {
      id: 28,
      pic: "./images/Gallery/12.jpg",
      caption: "Customized",
    },
    {
      id: 29,
      pic: "./images/Gallery/13.jpg",
      caption: "Customized",
    },
    {
      id: 30,
      pic: "./images/Gallery/14.jpg",
      caption: "Customized",
    },
    {
      id: 31,
      pic: "./images/Gallery/15.jpg",
      caption: "Customized",
    },
    {
      id: 32,
      pic: "./images/Gallery/16.jpg",
      caption: "Customized",
    },
    {
      id: 33,
      pic: "./images/Gallery/customize.jpg",
      caption: "Customized",
    },
    {
      id: 34,
      pic: "./images/Gallery/17.jpg",
      caption: "Feeling Blue",
    },
    {
      id: 35,
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
        key={item.id}
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
