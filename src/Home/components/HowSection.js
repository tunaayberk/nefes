import React from "react";

import Services from "../sections/Services";

const HowSection = () => {
  return (
    <section className="how-section spad set-bg" data-setbg="img/how-to-bg.jpg">
      <div className="container">
        <div className="section-title text-white">
          <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>
            Calismalarimiz
          </h2>
        </div>

        <Services />
      </div>
    </section>
  );
};

export default HowSection;
