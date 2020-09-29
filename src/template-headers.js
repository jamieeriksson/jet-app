import React from "react";
import "./tailwind.output.css";
import logo from "./assets/logo.svg";

function ColorHeader() {
  return (
    <div
      className={`hidden w-screen z-0 h-16 mt-16 bg-gray-light md:h-12 md:mt-12 md:flex`}
    >
      <div className={` md:flex-grow-1 bg-gray-light`}></div>
      <div className={`md:flex-grow-3 bg-gray-light uppercase font-light`}>
        <div className="invisible">
          <img src={logo} className={`h-12 inline`} alt="logo" />
          <h2 className="hidden ml-1 md:inline">Jamie Eriksson Throwing</h2>
        </div>
      </div>
      <div className={` md:flex`}>
        <div className="bg-gray-300 w-28 h-64"></div>
        <div className="bg-red w-28 h-64"></div>
        <div className="bg-yellow w-28 h-64"></div>
        <div className="bg-teal-dark w-28 h-64"></div>
      </div>
      <div className={`bg-teal-dark h-64 md:flex-grow-1`}></div>
    </div>
  );
}

class Title extends React.Component {
  render() {
    return (
      <div className="absolute w-screen flex justify-center items-center h-full">
        <div className="pl-5 md:pl-0 md:flex-grow-1"></div>
        <h1 className="font-title text-5xl uppercase text-gray-dark tracking-widest rotate mb-12 md:text-6xl lg:mb-8 xl:mb-5">
          {this.props.title}
        </h1>
        <div className="flex-grow-10 lg:flex-grow-6 xl:flex-grow-4"></div>
      </div>
    );
  }
}

class PageHeader extends React.Component {
  render() {
    return (
      <div id="upper-triangles" className="relative">
        <Title title={this.props.title} />
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 177L5.07832e-05 86V177H1440Z" fill="#314E4A" />
          <path d="M0 177L1440 0V177H0Z" fill="#313131" />
        </svg>
      </div>
    );
  }
}

export { ColorHeader, PageHeader };
