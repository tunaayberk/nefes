import React from "react";

import NefesLogo from "../assets/images/sitebanner.png";

const Contact = () => {
  return (
    <section className="intro-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 section-image">
            <img src={NefesLogo} />
          </div>
          <div className="col-lg-6">
            <h2>Iletisim</h2>
            <p>Iletisim Formu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
