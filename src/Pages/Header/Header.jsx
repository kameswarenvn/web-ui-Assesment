import React from "react";
import Vid from "../../Components/Assets/video_01.mp4";
import "./Header.css";
import Left_Arrow from "../../Components/Assets/left_arrow.png";
import Right_Arrow from "../../Components/Assets/right_arrow.png";
import White_Arrow from "../../Components/Assets/white_arrow.png";
import Video_Image from '../../Components/Assets/image-07.png'

const Header = () => {
  return (
    <div className="header-container">
      <video
        className="header-video"
        src={Vid}
        autoPlay
        loop
        muted
      />
       <img
        className="header-image"
        src={Video_Image}
        alt="Header"
      />
      <div className="header-content">
        <h2 className="header-text">
          Lorem, ipsum <span className="header-color"> dolor </span>{" "}
        </h2>
        <div className="header-btn-container">
          <div className="header-button">
            <p style={{ fontSize: 20 }}>Explore</p>
            <div style={{marginTop:5, marginLeft:5}}>
              <img
                style={{ width: "20px", height: "20px" }}
                src={Right_Arrow}
                alt="Right Arrow"
              />
            </div>
          </div>
          <div className="header-button-color">
            <p style={{ fontSize: 20 }}>Explore</p>
            <div style={{marginTop:5, marginLeft:5}}>
              <img
                style={{ width: "20px", height: "20px" }}
                src={White_Arrow}
                alt="White Arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
