import React from "react";

import Slider from "./components/Slider";

import HowSection from "./components/HowSection";
import Konseptimiz from "./components/Konseptimiz";
import Etkinlikler from "./components/Etkinlikler";
import Blog from "./components/Blog";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <HowSection />
      <Konseptimiz />
      <Etkinlikler />
      <Blog />
    </React.Fragment>
  );
};

export default HomePage;
