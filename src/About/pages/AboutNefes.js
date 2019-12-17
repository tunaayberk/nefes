import React from "react";

import NefesLogo from "../../assets/images/sitebanner.png";

const AboutNefes = () => {
  return (
    <section className="intro-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 section-image">
            <img src={NefesLogo} />
          </div>
          <div className="col-lg-6">
            <h2>Nefes- i Hızır Kimdir ?</h2>
            <p>
              <h4>
                <b>Hızır</b>
              </h4>{" "}
              Atlantis dönemi Erenlerinden olan Hızır, aynı zamanda, Atlantis’te
              bilgiler kirlenmeden ve uygarlık batmadan önce bütün kadim
              bilgilerle birlikte evrende enerji beden olarak varlığını
              sürdürmeye karar vermiş yüce bir rehberdir. Tüm dünyada, kültür ve
              inançlarda değişik isimler ile ara ara kısa dönemler bedenlenerek
              hazır olanlara kadim bilgileri aktararak, Hz. Musa, Mevlana gibi
              kişilere rehberlik etmiştir. O her yerdedir ve her zaman bu konuda
              yardım ve desteğini sunmaya hazırdır.{" "}
            </p>
            <p>
              <h4>
                <b>Nefes</b>
              </h4>{" "}
              İlahi, tüm evreni yaratıp sıra insana gelince kendi suretinde
              yarattığı bu varlığa, ruhundan ruh üflemiştir. Kutsal nefesini
              insana sunmuştur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNefes;
