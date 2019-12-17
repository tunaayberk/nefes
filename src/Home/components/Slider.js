import React, { useState } from "react";

import Slider from "react-slick";

import Slide from "./components/Slide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const [settings] = useState({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  return (
    <div style={{ height: "500px", width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <Slide
          number="0"
          header={"REIKI"}
          content={["BILINÇALTI SÜREÇLERININ", "ÇÖZÜLMESINE YARDIMCI OLUNUR"]}
        />
        <Slide number="2" content={[]} />
        <Slide number="3" content={[]} />
        <Slide number="5" content={[]} />
      </Slider>
    </div>
  );
};

export default SliderComponent;
