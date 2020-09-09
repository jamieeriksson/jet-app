import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import * as serviceWorker from "./serviceWorker";
import logo from "./assets/logo.svg";

class NavItem extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.menuIsOpen ? "" : "hidden"} ${
          this.props.bg
        } flex align-center justify-center md:w-32 md:flex`}
        id={`${this.props.id}`}
      >
        <a href={`/${this.props.link}`} className="p-3 md:p-4">
          {this.props.linkName}
        </a>
      </div>
    );
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuIsOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {
    return (
      <nav className="relative h-16 bg-gray-light text-xl md:flex md:justify-end">
        <img
          src={logo}
          className="inline h-16 md:absolute md:left-0 md:ml-4"
          alt="logo"
        />
        <button
          className="inline absolute right-0 m-4 md:hidden"
          onClick={this.toggleMenu}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="8"></rect>
            <rect y="30" width="100" height="8"></rect>
            <rect y="60" width="100" height="8"></rect>
          </svg>
        </button>
        <NavItem
          id={"nav-link1"}
          bg={"bg-gray"}
          link={"home"}
          linkName={"Home"}
          menuIsOpen={this.state.menuIsOpen}
        />
        <NavItem
          id={"nav-link2"}
          bg={"bg-red"}
          link={"about"}
          linkName={"About"}
          menuIsOpen={this.state.menuIsOpen}
        />
        <NavItem
          id={"nav-link3"}
          bg={"bg-yellow"}
          link={"services"}
          linkName={"Services"}
          menuIsOpen={this.state.menuIsOpen}
        />
        <NavItem
          id={"nav-link4"}
          bg={"bg-teal-dark"}
          link={"contact"}
          linkName={"Contact"}
          menuIsOpen={this.state.menuIsOpen}
        />
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
