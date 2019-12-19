import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ServicesHeader from "./components/ServicesHeader";

import ourservices from "./data/ourservices";
import ourevents from "./data/ourevents";

import capitalizeFirstLetter from "../shared/functions/capitalizeFirstLetter";

import "./styles/Services.scss";

const Services = () => {
  //Dynamicly Import the Images
  const images = require.context("../assets/images/backgrounds", true);
  let bgImage = images("./bg" + (Math.floor(Math.random() * 3) + 1) + ".jpg");

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { cid } = useParams();

  useEffect(() => {
    let link = window.location.pathname
      .replace(cid, "")
      .split("/")
      .join("");

    setCategory(capitalizeFirstLetter(link));

    let data = link === "etkinlik" ? ourevents : ourservices[link];

    setTitle(data[cid].title);
    setContent(data[cid].content);
  }, [window.location.pathname]);

  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <ServicesHeader title={title} category={category} />
      <div className="services" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
