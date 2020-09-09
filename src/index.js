import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import * as serviceWorker from "./serviceWorker";
import logo from "./assets/logo.svg";
import throwingHeader from "./assets/throwing3-crop.png";

class NavItem extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.bg} flex align-center justify-center md:w-28`}
        id={`${this.props.id}`}
      >
        <a
          href={`/${this.props.link}`}
          className="p-3 text-xl uppercase font-light md:text-sm "
        >
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
      <nav className="sticky inset-0 h-16 max-w-6xl container z-50 md:h-12 md:flex md:justify-end">
        <img
          src={logo}
          className="inline h-full md:absolute md:left-0 md:pl-4 xl:pl-8"
          alt="logo"
        />
        <button
          className="inline absolute right-0 p-4 md:hidden"
          onClick={this.toggleMenu}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="8"></rect>
            <rect y="30" width="100" height="8"></rect>
            <rect y="60" width="100" height="8"></rect>
          </svg>
        </button>
        <div className={`${this.state.menuIsOpen ? "" : "hidden"} md:flex`}>
          <NavItem
            id={"nav-link1"}
            bg={"bg-gray-300"}
            link={"home"}
            linkName={"Home"}
          />
          <NavItem
            id={"nav-link2"}
            bg={"bg-red"}
            link={"about"}
            linkName={"About"}
          />
          <NavItem
            id={"nav-link3"}
            bg={"bg-yellow"}
            link={"services"}
            linkName={"Services"}
          />
          <NavItem
            id={"nav-link4"}
            bg={"bg-teal-dark"}
            link={"contact"}
            linkName={"Contact"}
          />
        </div>
      </nav>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="overflow-hidden relative h-full flex justify-center shadow-custom">
          <img
            src={throwingHeader}
            className="absolute inset-0 w-full h-full object-cover object-top shadow-custom"
            alt="Three women throwing frisbee"
          />
          <div
            className="absolute inset-0 h-full bg-gradient-to-br from-teal-900 via-black to-transparent opacity-25"
            id="header-gradient"
          ></div>
          <div
            className="absolute inset-0 h-full backdrop-blur"
            id="header-background-blur"
          ></div>
          <div
            className="relative max-w-6xl w-full ml-5 my-12 md:my-48 md:ml-24"
            id="header-text-container"
          >
            <div className="w-32 h-6 bg-teal"></div>
            <h1 className="font-title text-4xl md:text-5xl uppercase">
              Up Your Throwing, <br />
              Up Your Game.
            </h1>
            <h2 className="text-base font-light md:text-lg">
              The first ultimate frisbee throwing coaching service.
            </h2>
          </div>
        </div>
        <div className="flex justify-center z-10 max-w-6xl w-full self-center md:ml-64 md:justify-start">
          <button className="-mt-4 w-56 bg-teal-dark">
            <h3 className="font-title text-2xl uppercase p-3 text-gray-light text-center">
              Sign Up
            </h3>
          </button>
        </div>
      </div>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div className="bg-gray-200">
        <NavBar />
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
