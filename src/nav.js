import React from "react";
import { Link } from "react-router-dom";
import "./tailwind.output.css";
import logo from "./assets/logo.svg";

class NavItem extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.bg} transition duration-1000 ease-in-out md:${
          this.props.transparent ? "bg-opacity-50" : ""
        } flex md:w-28`}
        id={`${this.props.id}`}
      >
        <Link
          onClick={this.props.hideMenu}
          to={`/${this.props.link}`}
          className={`w-full p-3 text-center text-xl uppercase font-light transition duration-300 ease-in-out md:hover:${this.props.bg} md:w-28 md:text-sm`}
        >
          {this.props.linkName}
        </Link>
      </div>
    );
  }
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuIsOpen: false, scrolledDown: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY > 150) {
      this.setState({
        scrolledDown: true,
      });
    } else {
      this.setState({
        scrolledDown: false,
      });
    }
  }

  toggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  render() {
    return (
      <nav
        className={`fixed inset-0 w-screen h-16 z-50 bg-gray-light md:h-12 md:flex md:${
          this.state.scrolledDown ? "bg-opacity-25" : ""
        } transition duration-1000 ease-in-out`}
      >
        <div
          className={`${
            this.state.scrolledDown ? "bg-opacity-25" : ""
          } transition duration-1000 ease-in-out md:flex-grow-1 bg-gray-light`}
        ></div>
        <div
          className={`md:${
            this.state.scrolledDown ? "bg-opacity-25" : ""
          } transition duration-1000 ease-in-out md:flex-grow-3 bg-gray-light uppercase font-light`}
        >
          <Link to="/">
            <img
              src={logo}
              className={`md:${
                this.state.scrolledDown ? "bg-opacity-25" : ""
              } transition duration-1000 ease-in-out h-16 md:h-12 inline`}
              alt="logo"
            />
            <h2 className="hidden ml-1 md:inline">Jamie Eriksson Throwing</h2>
          </Link>
        </div>
        <button
          className="inline absolute top-0 right-0 p-4 focus:outline-none md:hidden"
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
            link={""}
            linkName={"Home"}
            hideMenu={this.toggleMenu}
            transparent={this.state.scrolledDown}
          />
          <NavItem
            id={"nav-link2"}
            bg={"bg-red"}
            link={"about"}
            linkName={"About"}
            hideMenu={this.toggleMenu}
            transparent={this.state.scrolledDown}
          />
          <NavItem
            id={"nav-link3"}
            bg={"bg-yellow"}
            link={"services"}
            linkName={"Services"}
            hideMenu={this.toggleMenu}
            transparent={this.state.scrolledDown}
          />
          <NavItem
            id={"nav-link4"}
            bg={"bg-teal-dark"}
            link={"contact"}
            linkName={"Contact"}
            hideMenu={this.toggleMenu}
            transparent={this.state.scrolledDown}
          />
        </div>
        <div
          className={`transition duration-1000 ease-in-out ${
            this.state.scrolledDown ? "bg-opacity-50" : ""
          } bg-teal-dark md:flex-grow-1`}
        ></div>
      </nav>
    );
  }
}
export default NavBar;
