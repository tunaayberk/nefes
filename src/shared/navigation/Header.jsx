import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import "./styles/Header.scss";

import ourservices, { services } from "../../Services/data/ourservices";
import ourevents from "../../Services/data/ourevents";

import Logo from "../../assets/images/sitebanner.png";
import LanguageChanger from "./components/LanguageChanger";

import { I18nContext } from "../../i18n/index";

const Header = () => {
  const servicesState = services();

  const { translate } = useContext(I18nContext);

  return (
    <header className="header-section">
      <Link to="/" className="site-logo" activeClassName="active-menu">
        <img className="site-logo-class" src={Logo} alt="" />
      </Link>

      <ul className="main-menu">
        <li className="menu-li">
          <NavLink
            activeClassName="active-menu"
            className="menu-a"
            exact
            to="/"
          >
            {translate("anasayfa")}
          </NavLink>
        </li>

        <li className="menu-li special">
          <NavLink className="menu-a" exact to="/">
            {translate("calismalarimiz")}
          </NavLink>
          <ul className="mega-menu">
            {Object.keys(servicesState).map(serviceCat => {
              return (
                <li key={serviceCat}>
                  <h2 className="submenu-a">
                    {translate(`${serviceCat}_calismalar`)}
                  </h2>
                  <ul className="subsub-menu">
                    {servicesState[serviceCat].map((service, index) => {
                      return (
                        <li className="submenu-a" key={index}>
                          <NavLink
                            exact
                            to={`/${serviceCat}/${service}`}
                            activeClassName="active-submenu"
                          >
                            {translate(
                              `${ourservices[serviceCat][service].translate}`
                            )}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="menu-li special">
          <NavLink className="menu-a" exact to="/">
            {translate("etkinliklerimiz")}
          </NavLink>
          <ul className="mega-menu">
            <li>
              <h2 className="submenu-a"></h2>
              <ul className="subsub-menu">
                {Object.keys(ourevents).map((event, index) => {
                  return (
                    <li key={index} className="submenu-a">
                      <NavLink
                        exact
                        to={`/etkinlik/${event}`}
                        activeClassName="active-submenu"
                      >
                        {translate(`${ourevents[event].translate}`)}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <NavLink
            className="menu-a"
            exact
            to="/blog"
            activeClassName="active-menu"
          >
            {translate("blog")}
          </NavLink>
        </li>
        <li className="menu-li">
          <NavLink className="menu-a" exact to="/">
            {translate("biz_kimiz")}
          </NavLink>
          <ul className="sub-menu">
            <li>
              <NavLink
                className="submenu-a"
                exact
                to="/nefes-i-hizir"
                activeClassName="active-submenu"
              >
                Nefes-i Hizir
              </NavLink>
            </li>
            <li>
              <NavLink
                className="submenu-a"
                exact
                to="/sabri-salis"
                activeClassName="active-submenu"
              >
                Sabri Salis
              </NavLink>
            </li>
            <li>
              <NavLink
                className="submenu-a"
                exact
                to="/gulcin-oner"
                activeClassName="active-submenu"
              >
                Gulcin Oner (Mavinin Sesi)
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="menu-li">
          <NavLink
            className="menu-a"
            exact
            to="/iletisim"
            activeClassName="active-menu"
          >
            {translate("iletisim")}
          </NavLink>
        </li>
      </ul>
      <div className="header-right">
        <LanguageChanger />
      </div>
    </header>
  );
};

export default Header;
