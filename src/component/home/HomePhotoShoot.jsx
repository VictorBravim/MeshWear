import React from "react";
import Slider from "react-slick";
import "./HomePhotoShoot.css";

import photo1 from "/src/assets/img/home-photo-1.webp";
import photo2 from "/src/assets/img/home-photo-2.webp";
import photo3 from "/src/assets/img/home-photo-3.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePhotoShoot() {
  const images = [photo1, photo2, photo3];

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
          <div key={index} className="img-slider">
            <img src={image} alt={`Model Photograph ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomePhotoShoot;
