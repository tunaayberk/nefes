import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Async from "react-code-splitting";

import history from "./history.js";

import { serviceCategories } from "./Services/data/ourservices";

import "./assets/css/style.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/slicknav.min.css";

const Header = () => <Async load={import("./shared/navigation/Header")} />;
const Footer = () => <Async load={import("./shared/footer/Footer")} />;

const HomePage = () => <Async load={import("./Home/HomePage")} />;
const Blog = () => <Async load={import("./Blog/Blog")} />;

const Services = () => <Async load={import("./Services/Services")} />;

const AboutNefes = () => <Async load={import("./About/pages/AboutNefes")} />;
const SabriSalis = () => <Async load={import("./About/pages/SabriSalis")} />;
const GulcinOner = () => <Async load={import("./About/pages/GulcinOner")} />;
const Konseptimiz = () => <Async load={import("./Other/Konseptimiz")} />;
const Contact = () => <Async load={import("./Other/Contact.jsx")} />;

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={Blog} />
          <Route path="/nefes-i-hizir" component={AboutNefes} />
          <Route path="/iletisim" component={Contact} />
          <Route path="/konseptimiz" component={Konseptimiz} />
          <Route path="/sabri-salis" component={SabriSalis} />
          <Route path="/gulcin-oner" component={GulcinOner} />

          {serviceCategories.map(serviceCat => {
            return (
              <Route
                key={serviceCat}
                path={`/${serviceCat}/:cid`}
                component={Services}
              />
            );
          })}
          <Route path="/etkinlik/:cid" component={Services} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
