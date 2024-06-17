import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import LeftArrow from '../../Components/Assets/left_arrow.png';
import RightArrow from '../../Components/Assets/right_arrow.png';

const ImageSlider = ({ images, closeSlider, showThumbnails, showArrows = true }) => {
  const sliderRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbnailSliderRef, setThumbnailSliderRef] = useState(null);

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

  const NextArrow = (props) => {
    const { className, onClick, currentSlide, slideCount } = props;
    return (
      <div
        className={`${className} ${currentSlide === slideCount - 1 ? 'disabled' : ''}`}
        onClick={onClick}
      >
        <img src={RightArrow} alt="Next" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <div className={`${className} ${currentSlide === 0 ? 'disabled' : ''}`} onClick={onClick}>
        <img src={LeftArrow} alt="Previous" />
      </div>
    );
  };

  const settings = {
    dots: !isMobile,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null,
    afterChange: (current) => {
      setCurrentSlide(current);
      if (thumbnailSliderRef) {
        thumbnailSliderRef.slickGoTo(current);
      }
    },
  };

  const thumbnailSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(images.length),
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => {
      sliderRef.current.slickGoTo(newIndex);
    },
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
        {showThumbnails && (
          <div className="thumbnail-container">
            <Slider ref={(slider) => setThumbnailSliderRef(slider)} {...thumbnailSettings}>
              {images.map((imgSrc, index) => (
                <div key={index} className={`thumbnail ${currentSlide === index ? 'active' : ''}`}>
                  <img src={imgSrc} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
