import React, { useContext } from "react";

import { I18nContext, translations } from "../../../i18n/index";

import tr from "../../../assets/images/flags/tr.png";
import ge from "../../../assets/images/flags/ge.png";
import uk from "../../../assets/images/flags/uk.png";

const LanguageChanger = () => {
  const { langCode, dispatchContext } = useContext(I18nContext);
  console.error("TEST", langCode);
  const onLanguageSelect = e => {
    dispatchContext({ type: "setLanguage", payload: e });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <img
        className={`flag ${langCode === "tr" ? "active" : null}`}
        onClick={() => onLanguageSelect("tr")}
        src={tr}
        alt="Turkce"
      />
      <img
        className={`flag ${langCode === "de" ? "active" : null}`}
        onClick={() => onLanguageSelect("de")}
        src={ge}
        alt="Deutch"
      />
      <img
        className={`flag ${langCode === "en" ? "active" : null}`}
        onClick={() => onLanguageSelect("en")}
        src={uk}
        alt="English"
      />
    </div>
  );
};

export default LanguageChanger;
