import React from "react";
import { Link, NavLink } from "react-router-dom";

import capitalizeFirstLetter from "../../shared/functions/capitalizeFirstLetter";

import "./styles/Header.scss";

import ourservices, { services } from "../../Services/data/ourservices";
import ourevents from "../../Services/data/ourevents";

import Logo from "../../assets/images/sitebanner.png";

const Header = () => {
  const servicesState = services();

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
            Anasayfa
          </NavLink>
        </li>

        <li className="menu-li special">
          <NavLink className="menu-a" exact to="/">
            Çalışmalarımız
          </NavLink>
          <ul className="mega-menu">
            {Object.keys(servicesState).map(serviceCat => {
              return (
                <li key={serviceCat}>
                  <h2 className="submenu-a">
                    {capitalizeFirstLetter(serviceCat)} Çalışmalar
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
                            {ourservices[serviceCat][service].title}
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
            Etkinliklerimiz
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
                        {ourevents[event].title}
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
            Blog
          </NavLink>
        </li>
        <li className="menu-li">
          <NavLink className="menu-a" exact to="/">
            Biz Kimiz
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
            to="/"
            activeClassName="active-menu"
          >
            İletişim
          </NavLink>
        </li>
      </ul>
      <div className="header-right">
        <a href="#" className="hr-btn">
          Help
        </a>
        <span>|</span>
        <div className="user-panel">
          <a href="" className="login">
            Login
          </a>
          <a href="" className="register">
            Create an account
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
