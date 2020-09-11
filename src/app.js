import React from "react";
import "./tailwind.output.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./nav.js";
import Home from "./home.js";
import About from "./about.js";
import Services from "./services.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route>
      </Switch>
    </Router>
  );
}

export default App;
