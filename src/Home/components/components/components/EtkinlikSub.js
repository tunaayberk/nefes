import React from "react";
import { Link } from "react-router-dom";

const EtkinlikSub = ({ day, date, time, title, link }) => {
  return (
    <article className="evenz-post evenz-post__event">
      <div className="evenz-bgimg evenz-bgimg--full evenz-duotone">
        <img
          width="1170"
          height="566"
          src="https://evenz.qantumthemes.xyz/demo/wp-content/uploads/2019/08/conference-centers-frankfurt-1170x566.jpg"
          className="evenz-post__event__i wp-post-image"
        />
      </div>
      <div className="evenz-post__event__c">
        <h4 className="evenz-post__event__d evenz-capfont">
          <span>{day}</span>
          <span>{date}</span>
          <span>{time}</span>
        </h4>
        <div className="evenz-post__event__t">
          <h2>{title}</h2>
        </div>
        <div className="evenz-post__event__b">
          <Link
            to={link}
            style={{
              background: "rgb(252, 2, 84)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "30px",
              textDecoration: "none",
              textAlign: "center"
            }}
          >
            Devami
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EtkinlikSub;
