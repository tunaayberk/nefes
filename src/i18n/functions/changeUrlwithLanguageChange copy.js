import history from "../../history.js";

import { translations } from "../index";

const changeUrlwithLanguageChange = (langCode, entryState) => {
  let newUrl = history.location.pathname;
  if (!entryState) {
    if (history.location.pathname.includes("preview")) {
      if (
        Object.keys(translations).some(code => newUrl.includes(`/${code}/`))
      ) {
        Object.keys(translations)
          .filter(code => {
            if (newUrl.includes(code) && code !== "en") {
              return true;
            } else {
              return false;
            }
          })
          .map(code => (newUrl = newUrl.replace(`/${code}/`, "/")));
      }
      newUrl = newUrl.replace("preview", `preview/${langCode}`);
    } else {
      if (Object.keys(translations).some(code => newUrl.includes(code))) {
        Object.keys(translations)
          .filter(code => {
            if (newUrl.includes(code)) {
              return true;
            } else {
              return false;
            }
          })
          .map(code => (newUrl = newUrl.replace(`${code}/`, "")));
      }
      newUrl = `/${langCode}${newUrl}`;
    }
    if (newUrl.includes("/en/")) {
      newUrl = newUrl.replace("/en/", "/");
    }
  }
  history.push(newUrl);
};

export default changeUrlwithLanguageChange;
