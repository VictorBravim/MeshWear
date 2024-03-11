import React from "react";
import Slider from "react-slick";
import "./HomePhotoShoot.css";

import photo1 from "/src/assets/img/mulher.png";
import photo2 from "/src/assets/img/homen.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePhotoShoot() {
  const images = [photo1, photo2];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="photoshoot-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Model Photograph ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomePhotoShoot;
