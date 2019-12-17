import React, { useState } from "react";

import BlogCart from "./components/BlogCart";
import BlogCartLine from "./components/BlogCartLine";

import "./styles/Blog.scss";

import blogBgImg from "../assets/images/blog/blog-bg.jpg";

import PLACE_HOLDER from "./data/placeholderBlog";

const Blog = () => {
  const [blocContentState] = useState(PLACE_HOLDER);
  return (
    <section className="newsPageArea ">
      <div className="blog-bg" style={{ backgroundImage: `url(${blogBgImg})` }}>
        <h1>
          Nefes-i Hizir{" "}
          <strong>
            <em>Blog</em>
          </strong>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {blocContentState.map(({ id, ...otherInfo }) => (
            <BlogCartLine key={id} {...otherInfo} />
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="defaultPagination text-center wow fadeInUp">
              <li>
                <a className="prePost" href="#">
                  <i className="ion-ios-arrow-back"></i>
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a className="nextPost" href="#">
                  <i className="ion-ios-arrow-forward"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
