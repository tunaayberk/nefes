import React from "react";
import { Link } from "react-router-dom";

import "../styles/ServicesHeader.scss";

const ServicesHeader = ({ title, category }) => {
  return (
    <div className="page_title_container scroll_anim">
      <div className="page_title_wrapper container">
        <div className="page_title_customizer_size">
          <h1 className="page_title">{title} </h1>
        </div>
        <span className="title_divider"></span>
        <div className="breadcrumbs">
          <div className="container">
            <nav className="bread-crumbs">
              <Link to="/">Anasayfa</Link>
              <span style={{ color: "black" }}>></span>
              <span className="current">{category}</span>
            </nav>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ServicesHeader;
