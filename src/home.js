import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";

import throwingPlaceholder from "./assets/placeholder.png";
import throwingVideo from "./assets/Slomo-Throwing-Short-6.m4v";
import instagram from "./assets/icons8-instagram.svg";
import twitter from "./assets/icons8-twitter.svg";
import facebook from "./assets/icons8-facebook.svg";

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
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 177L5.07832e-05 86V177H1440Z" fill="#314E4A" />
          <path d="M0 177L1440 0V177H0Z" fill="#313131" />
        </svg>
        <div className="bg-gray-dark -mt-2 z-0">
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
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5.75185e-06L1440 115V5.75185e-06H0Z" fill="#314E4A" />
          <path d="M1440 0L0 177V0H1440Z" fill="#313131" />
        </svg>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="w-screen bg-teal-dark">
        <div className="container max-w-4xl flex flex-wrap justify-center">
          <ul className="list-none font-light text-sm text-gray-600 p-3 md:p-10">
            <li className="text-gray-500 font-normal text-sm uppercase mb-1">
              Navigation
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
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
                <img
                  src={instagram}
                  className="h-6 pl-1"
                  alt="instagram logo"
                ></img>
              </a>
            </li>
            <li className="mt-1 opacity-50 hover:opacity-100">
              <a href="https://twitter.com/jamieriksson">
                <img
                  src={twitter}
                  className="h-6 pl-1"
                  alt="twitter logo"
                ></img>
              </a>
            </li>
            <li className="mt-1 opacity-50 hover:opacity-100">
              <a href="https://www.facebook.com/jamie.eriksson.5/">
                <img
                  src={facebook}
                  className="h-6 pl-1"
                  alt="facebook logo"
                ></img>
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

class Home extends React.Component {
  render() {
    return (
      <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
        <div className="w-screen h-16 md:h-12 bg-light-gray"></div>
        <Header />
        <PageBody />
        <div className="flex-grow-1 h-16"></div>
        <Footer />
      </div>
    );
  }
}

export default Home;
