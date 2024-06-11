import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imagegallery.css'; // Make sure to create this CSS file for custom styles
import { Area1, Area2, Area3, Area4 } from '../../assets/images/images';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return ( 
    <div className="gallery-section container margin-auto">
      <h2>Gallery</h2>
      <Slider {...settings}>
        <div className="gallery-item">
          <img src={Area1} alt="Waiting Area" />
          <div className="gallery-caption">Waiting Area</div>
        </div>
        <div className="gallery-item">
          <img src={Area2}alt="Play Area" />
          <div className="gallery-caption">Play Area</div>
        </div>
        <div className="gallery-item">
          <img src={Area3} alt="Room 1" />
          <div className="gallery-caption">Room 1</div>
        </div>
        <div className="gallery-item">
          <img src={Area4}alt="Room 2" />
          <div className="gallery-caption">Room 2</div>
        </div>
      </Slider>
      <div className="view-all-gallery">
        <a href="/gallery">View all gallery</a>
      </div>
    </div>
  );
};

export default Gallery;
