import React, { useContext } from "react";

import Konsept from "../../assets/images/konsept.jpg";
import { Link } from "react-router-dom";

import { I18nContext } from "../../i18n/index";

import "./components/style/Konseptimiz.scss";

const Konseptimiz = () => {
  const { translate } = useContext(I18nContext);
  return (
    <section className="premium-section">
      <div className="row" style={{ marginRight: "0px" }}>
        <div className="col-lg-6">
          <img src={Konsept} alt="" />
        </div>
        <div className="flex col-lg-6">
          <div className="section-title">
            <h2>{translate("konseptimiz")}</h2>
            <p>
              Nefes-i Hızır Kişisel Gelişim Merkezi olarak, hedefimiz ruhunuzun
              yaşam planını keşfederek, yaşamdaki yerinizi almaya bu yolda
              aydınlanmaya rehberlik etmektir.
            </p>
            <Link
              style={{
                background: "#fc0254",
                color: "white",
                padding: "10px 20px",
                borderRadius: "30px",
                textDecoration: "none"
              }}
              to={"/konseptimiz"}
            >
              Devami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Konseptimiz;
