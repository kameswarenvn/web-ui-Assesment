import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import Img_1 from '../../Components/Assets/302.jpeg';
import Img_2 from '../../Components/Assets/301.jpeg';
import Img_3 from '../../Components/Assets/300.jpeg';
import Cards from '../../Components/Cards/Cards';
import Left_Arrow from '../../Components/Assets/left_arrow.png';
import Right_Arrow from '../../Components/Assets/right_arrow.png';

const Testimonials = () => {
  const cardsData = [
    {
      imgSrc: Img_1,
      name: 'John',
      designation: 'Designation',
      division: 'Division',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit repudiandae tempora laudantium ipsa esse! Eius numquam a ipsum deserunt!',
      buttonText: 'Explore now',
    },
    {
      imgSrc: Img_2,
      name: 'Jane',
      designation: 'Senior Developer',
      division: 'Tech Division',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit repudiandae tempora laudantium ipsa esse! Eius numquam a ipsum deserunt!',
      buttonText: 'Explore more',
    },
    {
      imgSrc: Img_3,
      name: 'Smith',
      designation: 'Manager',
      division: 'Operations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit repudiandae tempora laudantium ipsa esse! Eius numquam a ipsum deserunt!',
      buttonText: 'Explore more',
    },
    {
      imgSrc: Img_1,
      name: 'John',
      designation: 'Designation',
      division: 'Division',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit repudiandae tempora laudantium ipsa esse! Eius numquam a ipsum deserunt!',
      buttonText: 'Explore now',
    },
    {
      imgSrc: Img_2,
      name: 'Jane',
      designation: 'Senior Developer',
      division: 'Tech Division',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit repudiandae tempora laudantium ipsa esse! Eius numquam a ipsum deserunt!',
      buttonText: 'Explore more',
    },
    {
      imgSrc: Img_3,
      name: 'Smith',
      designation: 'Manager',
      division: 'Operations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odit repudiandae tempora laudantium ipsa esse! Eius numquam a ipsum deserunt!',
      buttonText: 'Explore more',
    },
  ];

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={Right_Arrow} alt="Next" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={Left_Arrow} alt="Previous" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      <div>
        <h2>Section title goes here</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          quibusdam praesentium aut reiciendis aspernatur adipisci id nobis
          molestias doloremque esse.
        </p>
      </div>
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className="testimonial-slide">
            <Cards {...card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
