import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import history from "./history.js";

import Header from "./shared/navigation/Header";
import Footer from "./shared/footer/Footer";

import HomePage from "./Home/HomePage";
import Blog from "./Blog/Blog";

import Services from "./Services/Services";

import AboutNefes from "./About/pages/AboutNefes";
import SabriSalis from "./About/pages/SabriSalis";
import GulcinOner from "./About/pages/GulcinOner";
import Konseptimiz from "./Other/Konseptimiz";

import { serviceCategories } from "./Services/data/ourservices";

import "./assets/css/style.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/slicknav.min.css";

function App() {
  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog" component={Blog} />
          <Route path="/nefes-i-hizir" component={AboutNefes} />
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
