import React from "react";
import Image from "../components/Image"

const Gallery = () => {
  const images = [
    {
      pic: "./images/Gallery/1.jpg",
    },
    {
      pic: "./images/Gallery/2.jpg",
    },
    {
      pic: "./images/Gallery/3.jpg",
    },
    {
      pic: "./images/Gallery/4.jpg",
    },
    {
      pic: "./images/Gallery/5.jpg",
    },
    {
      pic: "./images/Gallery/6.jpg",
    },
    {
      pic: "./images/Gallery/7.jpg",
    },
    {
      pic: "./images/Gallery/8.jpg",
    },
    {
      pic: "./images/Gallery/9.jpg",
    },
    {
      pic: "./images/Gallery/10.jpg",
    },
    {
      pic: "./images/Gallery/11.jpg",
    },
    {
      pic: "./images/Gallery/12.jpg",
    },
    {
      pic: "./images/Gallery/13.jpg",
    },
    {
      pic: "./images/Gallery/14.jpg",
    },
    {
      pic: "./images/Gallery/15.jpg",
    },
    {
      pic: "./images/Gallery/16.jpg",
    },
    {
      pic: "./images/Gallery/17.jpg",
    },
    {
      pic: "./images/Gallery/18.jpg",
    },
    {
      pic: "./images/Gallery/19.jpg",
    },
    {
      pic: "./images/Gallery/20.jpg",
    },
    {
      pic: "./images/Gallery/21.jpg",
    },
    {
      pic: "./images/Gallery/22.jpg",
    },
    {
      pic: "./images/Gallery/23.jpg",
    },
    {
      pic: "./images/Gallery/24.jpg",
    },
    {
      pic: "./images/Gallery/25.jpg",
    },
    {
      pic: "./images/Gallery/26.jpg",
    },
    {
      pic: "./images/Gallery/27.jpg",
    },
    {
        pic: "./images/Gallery/28.jpg"
    },
  ];

  return(<div>
      {images.map((image)=>{
          <Image  pic={image.pic}/>
       })} 
  </div>) ;
};

export default Gallery;
