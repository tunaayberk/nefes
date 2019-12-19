import React, { useReducer } from "react";

import EN from "./languages/en.json";
import TR from "./languages/tr.json";
import DE from "./languages/de.json";

export const translations = {
  en: EN,
  tr: TR,
  de: DE
};

const getTranslate = langCode => key => translations[langCode][key] || key;

const initialState = {
  langCode: "tr",
  translate: getTranslate("tr")
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setLanguage":
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload)
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatchContext] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ ...state, dispatchContext }}>
      {children}
    </I18nContext.Provider>
  );
};
