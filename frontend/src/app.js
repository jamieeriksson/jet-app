import React from "react";
import "./tailwind.output.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./nav.js";
import Home from "./home/home.js";
import About from "./about/about.js";
import Services from "./services/services.js";
import Sponsorship from "./sponsorship/sponsorship.js";
import Contact from "./contact/contact.js";
import InitialConsult from "./services/initial-consult.js";
import Clinics from "./clinics/clinics.js";
import NoMatch from "./not-found/not-found.js";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/sponsorship" component={Sponsorship}></Route>
        <Route path="/initial-consult" component={InitialConsult}></Route>
        <Route path="/clinics" component={Clinics}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
