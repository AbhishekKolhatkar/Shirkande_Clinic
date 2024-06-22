import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: 'Ravi Chavan',
    title: 'Software Engineer',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    rating: 5,
    image: 'https://via.placeholder.com/60', // Replace with actual image path
  },
  {
    name: 'Kiara Sen',
    title: 'Model',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    rating: 5,
    image: 'https://via.placeholder.com/60', // Replace with actual image path
  },
  {
    name: 'Pravin Kolhe',
    title: 'Software Engineer',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    rating: 5,
    image: 'https://via.placeholder.com/60', // Replace with actual image path
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button className="next-button">&#8250;</button>,
    prevArrow: <button className="prev-button">&#8249;</button>,
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
    <div className="testimonials-container">
        <div className='container '>
        <h2 className="testimonials-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p className="testimonial-title">{testimonial.title}</p>
              <p>{testimonial.text}</p>
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
        </div>
      
    </div>
  );
};

export default Testimonials;
