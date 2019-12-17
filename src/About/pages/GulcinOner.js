import React from "react";

import GulcinOnerImg from "../../assets/images/gulcin-oner.jpg";

const GulcinOner = () => {
  return (
    <section className="intro-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 section-image">
            <img src={GulcinOnerImg} />
          </div>
          <div className="col-lg-6">
            <h2>GÜLÇİN ÖNEL (MAVİ’NİN SESİ)</h2>
            <p>
              <i>Priestess of Avalon & Lilith</i>{" "}
            </p>
            <p> Works with Goddess and Avalonian</p>
            <p>
              1980 İzmir doğumlu olan Gülçin Önel, 2003 yılında Güzel Sanatlar
              Fakültesi, Sinema-Televizyon bölümünü bitirip bir süre mesleğini
              icra etmiş olsada 2006’da Reiki ile buluşması onun tüm yolunu
              değiştirdi. Çıktığı yolculukta spiritüel olanla, psikoloji
              denilenin birbirinden ayrılamayacağını fark edip Psikoloji Yüksek
              Lisansı yapmaya başladı. Geçmiş Yaşam çalışmaları ile kolektif,
              atalar ve beden düzleminde ruhun saklı öykülerini incelerken,
              öğrendiği yöntemleri geliştirerek <b>‘Mavi’nin Sesi’</b> altında
              tüm öğreti ve bilgilerini buluşturmuştur. Bireysel danışmanlık
              yapmakta, seminerler vermektedir.
            </p>
            <p>
              {" "}
              <b>Lilith’in Işığı 11 </b>isimli bir kitabı vardır.{" "}
            </p>
            <p>
              <b>Mitoloji’nin Terapilerde Kullanımı</b> üzerine hazırladığı
              çalışma ile Yüksek Lisans’ını tamamlamıştır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GulcinOner;
