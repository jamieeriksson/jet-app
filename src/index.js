import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import logo from "./logo.svg";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <img src={logo} className="nav-logo" alt="logo" />
        <svg id="hamburger-menu" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <ul className="nav-menu">
          <li className="nav-item" id="nav-link1">
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item" id="nav-link2">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item" id="nav-link3">
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item" id="nav-link4">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Page extends React.Component {
  render() {
    return <NavBar />;
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
