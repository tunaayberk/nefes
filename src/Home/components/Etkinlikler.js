import React from "react";

import EtkinliklerComponent from "./components/EtkinliklerComponent";

const Etkinlikler = () => {
  return (
    <section className="how-section spad set-bg" data-setbg="img/how-to-bg.jpg">
      <div className="container">
        <div className="section-title text-white">
          <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>
            Etkinlikler
          </h2>
        </div>

        <EtkinliklerComponent />
      </div>
    </section>
  );
};

export default Etkinlikler;
