import React from "react";

import "./components/style/ConceptSection.scss";

const ConceptSection = () => {
  return (
    <section className="concept-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Biz Kimiz</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="flex col-lg-6 col-sm-12">
            <a href="#" className="photo">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/06/d1/5f/06d15fc8a69e2ab67143e5357a4184d7.jpg" />
              <div className="glow-wrap">
                <i className="glow"></i>
              </div>
              <h1>Sabri Salis</h1>
            </a>
          </div>
          <div className="flex col-lg-6 col-sm-12">
            <a href="#" className="photo">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/06/d1/5f/06d15fc8a69e2ab67143e5357a4184d7.jpg" />
              <div className="glow-wrap">
                <i className="glow"></i>
              </div>
              <h1>Gulcin Oner</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
