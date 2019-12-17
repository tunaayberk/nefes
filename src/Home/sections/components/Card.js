import React from "react";

const Card = ({ imgUrl, title, desc }) => {
  return (
    <div
      className="ser-card"
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    >
      <div className="card__content">
        <div className="card__content--description">
          <h3 className="roll-up">
            {title.split("").map(letter => {
              return (
                <span key={letter}>
                  <span>{letter}</span>
                  <span>{letter}</span>
                </span>
              );
            })}
          </h3>
          <p className="text-reveal">
            <span>
              {desc.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </span>
            <span>
              {desc.map((item, index) => (
                <span key={index}>
                  <span>{item}</span>
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
