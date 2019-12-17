import React from "react";

import NefesLogo from "../assets/images/sitebanner.png";

const Konseptimiz = () => {
  return (
    <section className="intro-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 section-image">
            <img src={NefesLogo} />
          </div>
          <div className="col-lg-6">
            <h2>Konseptimiz</h2>
            <p>
              Nefes-i Hızır Kişisel Gelişim Merkezi olarak, hedefimiz ruhunuzun
              yaşam planını keşfederek, yaşamdaki yerinizi almaya bu yolda
              aydınlanmaya rehberlik etmektir. Buradan yola çıkarak
              geliştirdiğimiz çeşitli seminer ve danışmanlıklarla sizleri bu
              yolculukta desteklemek, kişiyi ruh – beden – bilinç bütünlüğünde
              ele alıp, kişinin bedende kendini gösteren fiziksel
              rahatsızlıkların altındaki mesajları doğru şekilde okumasını
              sağlamak ve bilincinde kendine getirdiği güncel ve iş yaşantısını
              kısıtlayan düşünce yapılarını kırarak ufkunu genişletip,
              özgürleştirmek böylece ruh – beden – bilinç bütünlüğüne doğru en
              temel adım olan, ruhun mesajlarını doğru şekilde okuyarak, kişinin
              kendi yaşantısının üstadı olmasını sağlamak en temel
              önceliğimizdir. Ruhun aydınlanması ile ilahi düzende yerini alan
              kişi kendi yaşantısının yaratıcısı haline gelir. Nefes-i Hızır
              siz, yaşam planınızın neresinde iseniz sizi oradan alıp, tüm
              blokajlarınızdan edinilmesi gereken öğretileri bir zenginlik
              olarak hayatınıza katmanıza destek olurken katman katman Bir’liğe
              doğru olan yolculuğunuzda size rehberlik etmeyi görev edinmiş bir
              merkezdir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Konseptimiz;
