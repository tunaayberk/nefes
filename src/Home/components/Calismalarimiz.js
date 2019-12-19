import React, { useContext } from "react";

import Services from "../sections/Services";

import { I18nContext } from "../../i18n/index";

const Calismalarimiz = () => {
  const { translate } = useContext(I18nContext);

  return (
    <section className="how-section spad set-bg" data-setbg="img/how-to-bg.jpg">
      <div className="container">
        <div className="section-title text-white">
          <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>
            {translate("calismalarimiz")}
          </h2>
        </div>

        <Services />
      </div>
    </section>
  );
};

export default Calismalarimiz;
