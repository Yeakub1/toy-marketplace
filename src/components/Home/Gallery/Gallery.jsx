import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init();
  }, []);
    return (
      <div className="max-w-7xl px-4 mx-auto" data-aos="zoom-in">
        <h1 className="text-3xl text-center mt-10 font-bold ">Car Gallery</h1>
        <div className="grid lg:grid-cols-4">
          <img
            src="https://i.ibb.co/LCJSd4H/car2.jpg"
            alt=""
            draggable="false"
          />
          <img
            src="https://i.ibb.co/DGZbNK0/car4.jpg"
            alt=""
            draggable="false"
          />
          <img
            src="https://i.ibb.co/J7hjdjP/car3.jpg"
            alt=""
            draggable="false"
          />
          <img
            src="https://i.ibb.co/GJrZZQ0/car6.jpg"
            alt=""
            draggable="false"
          />
        </div>
        <div className="grid lg:grid-cols-4">
          <img
            src="https://i.ibb.co/nbrLhdN/car1.jpg"
            alt=""
            draggable="false"
          />
          <img
            src="https://i.ibb.co/7XkHZP1/car15.jpg"
            alt=""
            draggable="false"
          />
          <img
            src="https://i.ibb.co/VVkxRFK/car9.jpg"
            alt=""
            draggable="false"
          />
          <img
            src="https://i.ibb.co/tDJgpMf/car7.jpg"
            alt=""
            draggable="false"
          />
        </div>
      </div>
    );
};

export default Gallery;