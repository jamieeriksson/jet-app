import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import * as serviceWorker from "./serviceWorker";
import logo from "./assets/logo.svg";
import throwingHeader from "./assets/header-photo-2.png";
import upperTriangles from "./assets/upper-triangles.svg";
import lowerTriangles from "./assets/lower-triangles.svg";

class NavItem extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.bg} ${
          this.props.transparent ? "bg-opacity-50" : ""
        } flex align-center justify-center hover:bg-opacity-100 md:w-28`}
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
        className={`sticky inset-0 w-screen z-50 bg-gray-light ${
          this.state.scrolledDown ? "bg-opacity-25" : ""
        }`}
      >
        <div className="relative container mx-auto max-w-6xl h-16 md:h-12 md:flex md:justify-end">
          <img
            src={logo}
            className="inline h-full md:absolute md:left-0 md:pl-4 xl:pl-8"
            alt="logo"
          />
          <button
            className="inline absolute right-0 p-4 focus:outline-none md:hidden"
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
              transparent={this.state.scrolledDown}
            />
            <NavItem
              id={"nav-link2"}
              bg={"bg-red"}
              link={"about"}
              linkName={"About"}
              transparent={this.state.scrolledDown}
            />
            <NavItem
              id={"nav-link3"}
              bg={"bg-yellow"}
              link={"services"}
              linkName={"Services"}
              transparent={this.state.scrolledDown}
            />
            <NavItem
              id={"nav-link4"}
              bg={"bg-teal-dark"}
              link={"contact"}
              linkName={"Contact"}
              transparent={this.state.scrolledDown}
            />
          </div>
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
            className="absolute inset-0 h-full bg-gradient-to-br from-gray-800 to-transparent opacity-25"
            id="header-gradient"
          ></div>
          <div
            className="absolute inset-0 h-full backdrop-blur-med md:backdrop-blur-light"
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
        <div className="flex justify-center z-10 max-w-6xl mb-24 w-full self-center md:ml-64 md:justify-start">
          <button className="-mt-4 w-48 bg-teal-dark">
            <h3 className="font-title text-xl uppercase p-3 text-gray-200 text-center">
              Sign Up
            </h3>
          </button>
        </div>
      </div>
    );
  }
}

class PageBody extends React.Component {
  render() {
    return (
      <div>
        <img src={upperTriangles} className="w-screen" />
        <div className="bg-gray-dark">
          <div className="p-6 max-w-6xl container font-sans text-gray-light">
            <h3 className="uppercase font-light">Our Philosophy</h3>
            <h4 className="text-2xl">
              A technique driven and fundamentals focused approach to throwing
              skills development.
            </h4>
            <p className="font-light">
              Our approach to throwing training is to come up with unique and
              creative drills that bias your body into using better technique.
              One of the biggest downfalls of the current approach to training
              and learning how to throw in ultimate is that it is not nuanced
              enough. In any other sport, people spend hours focusing on,
              working, and refining nuanced aspects of their technique, but in
              ultimate the status quo seems to be, “just throw a lot and you’ll
              figure it out”. Considering that most players aren’t even taught
              proper mechanics to begin with, this means several players spend
              hours practicing and solidifying poor throwing mechanic habits.
              We’re here to change that. Our drills are designed to train proper
              technique and help you reach your potential as a thrower.
            </p>
          </div>
        </div>
        <img src={lowerTriangles} className="w-screen" />
      </div>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div className="bg-gray-light min-h-screen">
        <NavBar />
        <Header />
        <PageBody />
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
