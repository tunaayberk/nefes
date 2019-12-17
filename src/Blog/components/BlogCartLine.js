import React from "react";

import "../styles/BlogCartLine.scss";

const BlogCart = ({
  imgName,
  title,
  date,
  shortDesc,
  imgAuthorName,
  authorName
}) => {
  //Dynamicly Import the Images
  const images = require.context("../../assets/images/blog", true);
  let img = images("./" + imgName);

  const imagesAuthor = require.context("../../assets/images/author", true);
  let imgAuthor = imagesAuthor("./" + imgAuthorName);

  return (
    <div className="post wow fadeInUp">
      <figure className="post-image">
        <img src={img} alt="Image" />
      </figure>

      <div className="post-content">
        <div className="inner">
          <small className="post-date">{date}</small>
          <h3 className="post-title">
            <a href="news-single.html">{title}</a>
          </h3>
          <div className="post-author">
            <img src={imgAuthor} alt="Image" />{" "}
            <span>
              by <a href="#">{authorName}</a>
            </span>
          </div>
          <p className="post-text">{shortDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
