import React from 'react';
import './Cards.css';
import Grey_Arrow from '../Assets/grey_arrow.png';

const Cards = ({ imgSrc, name, designation, division, description, buttonText }) => {
  return (
    <div className='card-wrapper' >
    <div className="card-container">
      <div className="card-image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="card-text-right">
        <div className="card-name">{name}</div>
        <div className="card-designation">{designation}</div>
        <div className="card-division">{division}</div>
      </div>
      <div className="card-description">
        <div className="card-indicator"></div>
        <div className="card-text">{description}</div>
      </div>
      <div className="card-button">
        {buttonText}{" "}
        <span>
          <img src={Grey_Arrow} alt="Arrow" />
        </span>
      </div>
    </div>
    </div>
  );
};

export default Cards;
