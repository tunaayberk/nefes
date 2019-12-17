import React from "react";

import PremiumImage1 from "../../assets/images/premium/1.jpg";
import PremiumImage2 from "../../assets/images/premium/2.jpg";
import PremiumImage3 from "../../assets/images/premium/3.jpg";
import PremiumImage4 from "../../assets/images/premium/4.jpg";

const Blog = () => {
  return (
    <section className="premium-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Diger Calismalarimiz</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="premium-item">
              <img src={PremiumImage1} alt="" />
              <h4>Golun Leydileri</h4>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="premium-item">
              <img src={PremiumImage2} alt="" />
              <h4>Goz Seminerleri</h4>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="premium-item">
              <img src={PremiumImage3} alt="" />
              <h4>Kayip Cennetin Izinde</h4>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="premium-item">
              <img src={PremiumImage4} alt="" />
              <h4>Ejderhalarin Efsanevi Rehberligi</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
