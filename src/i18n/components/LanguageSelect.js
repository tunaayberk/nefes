import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { I18nContext, translations } from "../index";

import { changeLanguage } from "../../redux/actions/mainActions";

import LanguageOption from "./components/LanguageOption";

import "./styles/LanguageSelect.scss";

const LanguageSelect = props => {
  const dispatchRedux = useDispatch();
  const { langCode, dispatchContext } = useContext(I18nContext);

  const onLanguageSelect = e => {
    dispatchRedux(changeLanguage(e.lang));
    dispatchContext({ type: "setLanguage", payload: e.lang });
  };

  return (
    <div className="select-sim" id="select-color">
      <div className="options">
        {Object.keys(translations).map(lang => {
          console.error("TRA", lang);
          return (
            <LanguageOption
              lang={lang}
              langCode={langCode}
              key={lang}
              changeLang={onLanguageSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelect;
