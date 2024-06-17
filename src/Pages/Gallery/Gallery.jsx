import React, { useState, useEffect } from 'react';
import './Gallery.css';
import GalImg_1 from '../../Components/Assets/image-03.jpg';
import GalImg_2 from '../../Components/Assets/image-02.jpg';
import GalImg_3 from '../../Components/Assets/image-01.jpg';
import GalImg_4 from '../../Components/Assets/image-03.jpg';
import GalImg_5 from '../../Components/Assets/image-04.jpg';
import GalImg_6 from '../../Components/Assets/image-05.jpg';
import GalImg_7 from '../../Components/Assets/image-06.jpg';
import GalImg_8 from '../../Components/Assets/image-04.jpg';
import GalImg_9 from '../../Components/Assets/image-05.jpg';
import Grey_Arrow from '../../Components/Assets/grey_arrow.png';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';

const Gallery = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = [
    GalImg_1,
    GalImg_2,
    GalImg_3,
    GalImg_4,
    GalImg_5,
    GalImg_6,
    GalImg_7,
    GalImg_8,
    GalImg_9,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openSlider = (event) => {
    if (isMobile) {
      event.preventDefault();
      return;
    }
    setShowSlider(true);
  };

  const closeSlider = () => {
    setShowSlider(false);
  };

  return (
    <div className='gallery'>
      <div className='gallery-container'>
        <div>
          <h2>Section title goes here</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            quibusdam praesentium aut reiciendis aspernatur adipisci id nobis
            molestias doloremque esse.
          </p>
        </div>
        <div className='gallery-grid'>
          <img src={GalImg_1} alt="Gallery Image 1" className="grid-item grid-item-1" />
          <img src={GalImg_2} alt="Gallery Image 2" className="grid-item" />
          <img src={GalImg_3} alt="Gallery Image 3" className="grid-item" />
          <img src={GalImg_4} alt="Gallery Image 4" className="grid-item grid-item-4" />
          <img src={GalImg_5} alt="Gallery Image 5" className="grid-item" />
          <img src={GalImg_6} alt="Gallery Image 6" className="grid-item" />
          <img src={GalImg_7} alt="Gallery Image 7" className="grid-item grid-item-7" />
          <img src={GalImg_8} alt="Gallery Image 8" className="grid-item" />
          <img src={GalImg_9} alt="Gallery Image 9" className="grid-item" />
        </div>
        <div className='gallery-slide'>
          {isMobile && <ImageSlider images={images} closeSlider={closeSlider} showArrows={false} />}
        </div>
      </div>
      <div
        className={`gallery-button ${isMobile ? 'disabled' : ''}`}
        onClick={openSlider}
      >
        Explore Now
        <span>
          <img style={{ marginTop: 5 }} src={Grey_Arrow} alt="Arrow" />
        </span>
      </div>
      {showSlider && <ImageSlider images={images} closeSlider={closeSlider} showThumbnails={true} />}
    </div>
  );
};

export default Gallery;
