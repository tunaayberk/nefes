import React from "react";

import "./style/Slide.scss";

const Slide = ({ number, header, content }) => {
  const images = require.context("../../../assets/images/home", true);
  let bgImage = images("./" + number + ".jpg");
  return (
    <div className="slide-bg" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="slider-content">
        <h1 style={{ color: "#08192d" }}>{header}</h1>
        {content && content.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
};

export default Slide;
