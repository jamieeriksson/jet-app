import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";
import * as serviceWorker from "./serviceWorker";
import logo from "./assets/logo.svg";
import throwingPlaceholder from "./assets/placeholder.png";
import lowerTriangles from "./assets/lower-triangles.svg";
// import throwingVideo from "./assets/slomo-short-cr45.mov";
import throwingVideo from "./assets/Slomo-Throwing-Short-6.m4v";
import instagram from "./assets/icons8-instagram.svg";
import twitter from "./assets/icons8-twitter.svg";
import facebook from "./assets/icons8-facebook.svg";

class NavItem extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.bg} transition duration-1000 ease-in-out md:${
          this.props.transparent ? "bg-opacity-50" : ""
        } flex md:w-28`}
        id={`${this.props.id}`}
      >
        <a
          href={`/${this.props.link}`}
          className={`transition duration-300 ease-in-out md:hover:${this.props.bg} md:w-28 text-center p-3 text-xl uppercase font-light md:text-sm`}
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
        className={`fixed inset-0 w-screen z-50 h-16 bg-gray-light md:h-12 md:flex md:${
          this.state.scrolledDown ? "bg-opacity-25" : ""
        } transition duration-1000 ease-in-out`}
      >
        <div
          className={`${
            this.state.scrolledDown ? "bg-opacity-25" : ""
          } transition duration-1000 ease-in-out md:flex-grow-1 bg-gray-light`}
        ></div>
        <img
          src={logo}
          className={`md:${
            this.state.scrolledDown ? "bg-opacity-25" : ""
          } transition duration-1000 ease-in-out h-full bg-gray-light`}
          alt="logo"
        />
        <div
          className={`md:${
            this.state.scrolledDown ? "bg-opacity-25" : ""
          } transition duration-1000 ease-in-out md:flex-grow-3 bg-gray-light uppercase font-light`}
        >
          <h2 className="hidden mt-4 ml-1 md:block">Jamie Eriksson Throwing</h2>
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
        <div
          className={`transition duration-1000 ease-in-out ${
            this.state.scrolledDown ? "bg-opacity-50" : ""
          } bg-teal-dark md:flex-grow-1`}
        ></div>
      </nav>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="overflow-hidden relative h-full flex justify-center shadow-custom">
          <video
            autoPlay
            loop
            muted
            poster={throwingPlaceholder}
            className="absolute inset-0 w-full h-full object-cover object-center shadow-custom hidden md:block"
          >
            <source src={throwingVideo} type="video/mp4"></source>
          </video>
          <img
            src={throwingPlaceholder}
            className="absolute inset-0 w-full h-full object-cover object-top shadow-custom md:hidden"
            alt="Three women throwing frisbee"
          />
          <div
            className="absolute inset-0 h-full bg-gradient-to-br from-white via-gray-200 to-black opacity-25"
            id="header-gradient"
          ></div>
          <div
            className="absolute inset-0 h-full backdrop-blur-med md:backdrop-blur-lg"
            id="header-background-blur"
          ></div>
          <div
            className="relative max-w-6xl w-full ml-5 my-12 md:my-48 md:ml-24"
            id="header-text-container"
          >
            <div className="w-32 h-6 bg-teal"></div>
            <h1 className="font-title text-4xl md:text-5xl uppercase text-shadow-sm">
              Up Your Throwing, <br />
              Up Your Game.
            </h1>
            <h2 className="text-base font-light text-shadow-sm md:text-lg">
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
        <img
          src={lowerTriangles}
          className="w-screen transform rotate-180"
          alt=""
        />
        <div className="bg-gray-dark -mt-2">
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
        <img src={lowerTriangles} className="w-screen" alt="" />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="w-screen bg-teal-dark">
        <div className="container max-w-4xl flex flex-wrap justify-center">
          {/* <img src={logo} className="h-16 self-center opacity-50" alt="logo" /> */}
          <ul className="list-none font-light text-sm text-gray-600 p-3 md:p-10">
            <li className="text-gray-500 font-normal text-sm uppercase mb-1">
              Navigation
            </li>
            <li>
              <a href="/home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
          <ul className="list-none font-light text-sm text-gray-600 p-3 md:p-10 md:pl-16">
            <li className="text-gray-500 font-normal text-sm uppercase mb-2">
              Social
            </li>
            <li className="mt-1 opacity-50 hover:opacity-100">
              <a href="https://www.instagram.com/jamieriksson/?hl=en">
                <img src={instagram} className="h-6 pl-1"></img>
              </a>
            </li>
            <li className="mt-1 opacity-50 hover:opacity-100">
              <a href="https://twitter.com/jamieriksson">
                <img src={twitter} className="h-6 pl-1"></img>
              </a>
            </li>
            <li className="mt-1 opacity-50 hover:opacity-100">
              <a href="https://www.facebook.com/jamie.eriksson.5/">
                <img src={facebook} className="h-6 pl-1"></img>
              </a>
            </li>
          </ul>
          <ul className="list-none font-light text-sm text-gray-600 p-3 md:p-10 md:pl-16">
            <li className="text-gray-500 font-normal text-sm uppercase mb-1">
              Contact
            </li>
            <li>
              <a href="/home" className="hover:text-gray-400">
                contact@jethrowing.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
        <NavBar />
        <div className="w-screen h-16 md:h-12 bg-light-gray"></div>
        <Header />
        <PageBody />
        <div className="flex-grow-1 h-16"></div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
