import React from "react";
import "../tailwind.output.css";
import throwingPlaceholder from "../assets/placeholder.png";
import throwingVideo from "../assets/Slomo-Throwing-Short-6.m4v";

class HomeHeader extends React.Component {
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
            id="Homeheader-gradient"
          ></div>
          <div
            className="absolute inset-0 h-full backdrop-blur-med md:backdrop-blur-lg"
            id="Homeheader-background-blur"
          ></div>
          <div
            className="relative max-w-6xl w-full ml-5 my-12 md:my-48 md:ml-24"
            id="Homeheader-text-container"
          >
            <div className="w-32 h-6 bg-teal-bright"></div>
            <h1 className="font-title text-4xl md:text-5xl uppercase text-shadow-sm">
              Up Your Throwing, <br />
              Up Your LAME.
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

export default HomeHeader;
