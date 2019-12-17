import React from "react";

import EtkinlikSub from "./components/EtkinlikSub";

import { etkinliklerDummy } from "./data/etkinlikler";

import "./style/EtkinliklerComponent.scss";

const EtkinliklerComponent = () => {
  return (
    <div className="col-lg-12">
      <div className="wpb_wrapper">
        {etkinliklerDummy.map(({ id, title, day, date, time, link }) => (
          <EtkinlikSub
            key={id}
            day={day}
            date={date}
            time={time}
            title={title}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default EtkinliklerComponent;
