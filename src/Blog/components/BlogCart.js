import React from "react";

import "../styles/BlogCart.scss";

const BlogCart = ({ imgName, title, date, shortDesc }) => {
  //Dynamicly Import the Images
  const images = require.context("../../assets/images/blog", true);
  let img = images("./" + imgName);

  return (
    <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp">
      <div className="newsContent text-center">
        <img src={img} alt="" />
        <div className="news">
          <h2>
            <a href="newsDetails.html">{title}</a>
          </h2>
          <a href="#">{date}</a>
          <p>{shortDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
