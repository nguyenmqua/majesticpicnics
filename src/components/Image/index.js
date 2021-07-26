import React from 'react';

import ModalExample from '../Modal';

const Example = (props) => {
  const images = [
    {
      id: 1,
      pic: "./images/Gallery/1.jpg",
    },
    {
      id:2,
      pic: "./images/Gallery/2.jpg",
    },
    {
      id:3,
      pic: "./images/Gallery/3.jpg",
    },
    {
      id:4,
      pic: "./images/Gallery/4.jpg",
    },
    {
      id:5,
      pic: "./images/Gallery/5.jpg",
    },
    {
      id: 6,
      pic: "./images/Gallery/6.jpg",
    },
    {
      id: 7,
      pic: "./images/Gallery/7.jpg",
    },
    {
      id:8,
      pic: "./images/Gallery/8.jpg",
    },
    {
      id:9,
      pic: "./images/Gallery/9.jpg",
    },
    {
      id: 10,
      pic: "./images/Gallery/10.jpg",
    },
    {
      id:11,
      pic: "./images/Gallery/11.jpg",
    },
    {
      id:12,
      pic: "./images/Gallery/12.jpg",
    },
    {
      id:13,
      pic: "./images/Gallery/13.jpg",
    },
    {
      id:14,
      pic: "./images/Gallery/14.jpg",
    },
    {
      id:15,
      pic: "./images/Gallery/15.jpg",
    },
    {
      id:16,
      pic: "./images/Gallery/16.jpg",
    },
    {
      id:17,
      pic: "./images/Gallery/17.jpg",
    },
    {
      id:18,
      pic: "./images/Gallery/18.jpg",
    },
    {
      id:19,
      pic: "./images/Gallery/19.jpg",
    },
    {
      id:20,
      pic: "./images/Gallery/20.jpg",
    },
    {
      id:21,
      pic: "./images/Gallery/21.jpg",
    },
    {
      id:22,
      pic: "./images/Gallery/22.jpg",
    },
    {
      id:23,
      pic: "./images/Gallery/23.jpg",
    },
    {
      id:24,
      pic: "./images/Gallery/24.jpg",
    },
    {
      id:25,
      pic: "./images/Gallery/25.jpg",
    },
    {
      id:26,
      pic: "./images/Gallery/26.jpg",
    },
    {
      id:27,
      pic: "./images/Gallery/27.jpg",
    }
  ];
  return (
    <div className="gallery">
      {images.map((image)=>
      <ModalExample src={image.pic} id={image.id} >
      </ModalExample>
      )} 
    </div>
  );
};

export default Example;