import React from "react";

const LanguageOption = ({ lang, langCode, changeLang }) => {
  const images = require.context("../../../assets/icons/country", true);
  let bgImage = images("./" + lang + ".png");

  return (
    <div className="option">
      <input
        type="radio"
        name="color"
        value={lang}
        id={`color-${lang}`}
        checked={lang === langCode ? true : false}
      />
      <label for={`color-${lang}`}>
        <div
          className="select"
          style={{ backgroundImage: `url(${bgImage})` }}
          onClick={() => changeLang({ lang })}
        ></div>
      </label>
    </div>
  );
};

export default LanguageOption;
