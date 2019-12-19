import React, { useState } from "react";

import Slider from "react-slick";

import Card from "./components/Card";

import "./styles/Services.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [settings] = useState({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  return (
    <Slider {...settings}>
      <Card
        imgUrl="https://d21950x0o1sh55.cloudfront.net/assets/home/game-0e307d71d9838e8fbe4927b551f119bcd9e4748f2c2b70c7b81846702996ef94.jpg"
        title="REIKI"
        desc={["BILINÇALTI SÜREÇLERININ ", "ÇÖZÜLMESINE YARDIMCI OLUNUR"]}
        link="/bireysel/reiki-mental"
      />
      <Card
        imgUrl="https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/26/desktop_VALERIAN_BNP_68.jpg"
        title="REGRESYON"
        desc={[
          "FIZIKSEL, ZIHINSEL,",
          "DUYGUSAL VE RUHSAL ",
          "DÜZLEMDE ÖZGÜRLEŞMEKTIR"
        ]}
        link="/bireysel/regresyon"
      />
      <Card
        imgUrl="https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/50/desktop_guided_tour_2.jpg"
        title="REFLEKSOLOJI"
        desc={[
          "AYAKLARIMIZDAKI REFLEKS",
          "NOKTALARINDA BÜTÜN ORGANLARIMIZIN",
          "HARITASI BULUNMAKTADIR"
        ]}
        link="/bireysel/refleksoloji"
      />
      <Card
        imgUrl="https://d21950x0o1sh55.cloudfront.net/assets/home/game-0e307d71d9838e8fbe4927b551f119bcd9e4748f2c2b70c7b81846702996ef94.jpg"
        title="REIKI"
        desc={["BILINÇALTI SÜREÇLERININ ", "ÇÖZÜLMESINE YARDIMCI OLUNUR"]}
        link="/bireysel/reiki-mental"
      />
      <Card
        imgUrl="https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/26/desktop_VALERIAN_BNP_68.jpg"
        title="REGRESYON"
        desc={[
          "FIZIKSEL, ZIHINSEL,",
          "DUYGUSAL VE RUHSAL ",
          "DÜZLEMDE ÖZGÜRLEŞMEKTIR"
        ]}
        link="/bireysel/regresyon"
      />
      <Card
        imgUrl="https://d21950x0o1sh55.cloudfront.net/uploads/inside_exclusif/picture/50/desktop_guided_tour_2.jpg"
        title="REFLEKSOLOJI"
        desc={[
          "AYAKLARIMIZDAKI REFLEKS",
          "NOKTALARINDA BÜTÜN ORGANLARIMIZIN",
          "HARITASI BULUNMAKTADIR"
        ]}
        link="/bireysel/refleksoloji"
      />
    </Slider>
  );
};

export default Services;
