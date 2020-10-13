import React from "react";
import { Link } from "react-router-dom";
import "./tailwind.output.css";

import instagram from "./assets/icons8-instagram.svg";
// import twitter from "./assets/icons8-twitter.svg";
// import facebook from "./assets/icons8-facebook.svg";

class Social extends React.Component {
  render() {
    return (
      <ul className="list-none font-light text-sm text-gray-600 mt-2">
        <li className="text-gray-500 font-normal text-sm uppercase mb-2">
          Social
        </li>
        <li className="mt-1 opacity-50 hover:opacity-100">
          <a
            href="https://www.instagram.com/jethrowing/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              className="h-6 pl-1"
              alt="instagram logo"
            ></img>
          </a>
        </li>
        {/* <li className="mt-1 opacity-50 hover:opacity-100">
          <a href="https://twitter.com/jamieriksson" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="h-6 pl-1" alt="twitter logo"></img>
          </a>
        </li>
        <li className="mt-1 opacity-50 hover:opacity-100">
          <a href="https://www.facebook.com/jamie.eriksson.5/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="h-6 pl-1" alt="facebook logo"></img>
          </a>
        </li> */}
      </ul>
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
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="list-none font-light text-sm text-gray-600 p-3 md:p-10 md:pl-16">
            <li className="text-gray-500 font-normal text-sm uppercase mb-1">
              Contact
            </li>
            <li>
              <a
                href="mailto: jamieeriksson@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                jamieeriksson@gmail.com
              </a>
            </li>
            <Social />
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
