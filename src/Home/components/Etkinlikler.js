import React, { useContext } from "react";

import EtkinliklerComponent from "./components/EtkinliklerComponent";

import { I18nContext } from "../../i18n/index";

const Etkinlikler = () => {
  const { translate } = useContext(I18nContext);
  return (
    <section className="how-section spad set-bg" data-setbg="img/how-to-bg.jpg">
      <div className="container">
        <div className="section-title text-white">
          <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>
            {translate("etkinliklerimiz")}
          </h2>
        </div>

        <EtkinliklerComponent />
      </div>
    </section>
  );
};

export default Etkinlikler;
