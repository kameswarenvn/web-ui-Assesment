import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = ({ images, closeSlider }) => {
  const sliderRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleClickOutside = (event) => {
    if (sliderRef.current && !sliderRef.current.contains(event.target)) {
      closeSlider();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const settings = {
    dots: !isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`slider-overlay ${isMobile ? 'mobile' : ''}`}>
      <div ref={sliderRef} className="slider-container">
        <Slider {...settings}>
          {images.map((imgSrc, index) => (
            <div key={index} className="slider-item">
              <img src={imgSrc} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        {!isMobile && (
          <button className="close-button" onClick={closeSlider}>
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
