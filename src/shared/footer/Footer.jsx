import React from "react";

import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 order-lg-2">
            <div className="row">
              <div className="col-sm-4">
                <div className="footer-widget">
                  <h2>About us</h2>
                  <ul>
                    <li>
                      <a href="">Our Story</a>
                    </li>
                    <li>
                      <a href="">Sol Music Blog</a>
                    </li>
                    <li>
                      <a href="">History</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="footer-widget">
                  <h2>Products</h2>
                  <ul>
                    <li>
                      <a href="">Music</a>
                    </li>
                    <li>
                      <a href="">Subscription</a>
                    </li>
                    <li>
                      <a href="">Custom Music</a>
                    </li>
                    <li>
                      <a href="">Footage</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="footer-widget">
                  <h2>Playlists</h2>
                  <ul>
                    <li>
                      <a href="">Newsletter</a>
                    </li>
                    <li>
                      <a href="">Careers</a>
                    </li>
                    <li>
                      <a href="">Press</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 order-lg-1">
            <img src={Logo} alt="" />

            <div className="social-links">
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa fa-pinterest"></i>
              </a>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
