import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { I18nContextProvider } from "./i18n/index";

ReactDOM.render(
  <I18nContextProvider>
    <App />
  </I18nContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
