import React from "react";
import "../tailwind.output.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import huckAnalysis from "../assets/huck-analysis.MOV";
import analysisPlaceholder from "../assets/huck-analysis-placeholder.png";

import { faUsers } from "@fortawesome/free-solid-svg-icons";

function ThrowingClinic() {
  return (
    <div className="p-6 pb-24 max-w-5xl container flex flex-col text-gray-light">
      <h2 className="text-right uppercase font-title text-4xl mt-4">
        Throwing Clinics
      </h2>
      <div className="self-end w-48 h-6 bg-teal-bright mb-12"></div>

      <p className="my-10 font-thin text-xl text-center">
        Struggling to find ways to develop the valuable skills your ultimate
        team needs to succeed this year? Looking for a way to continue engaging
        your ultimate community? We can come to your city to run a weekend-long
        socially distanced throwing mechanics clinic.
      </p>

      <FontAwesomeIcon
        icon={faUsers}
        size="6x"
        color="#EEEEEE"
        className="self-center"
      />
      <div className="md:mb-6 flex flex-col md:flex-row justify-center max-w-5xl w-full self-center">
        <div className="py-4 md:pb-0 md:pt-8 px-10 flex-1">
          <h4 className="font-title text-center">Multiple Time Slots</h4>
          <p className="my-2 text-center">
            For the entire weekend we will host multiple 1 to 1.5 hour time
            slots with maximum groups of four people per session. This helps
            people stay safe, and also allows players to get more one-on-one
            coaching during their session.
          </p>
        </div>
        <div className="py-4 md:pb-0 md:pt-8 px-10 flex-1 border-gray-light border-t md:border-t-0 md:border-l">
          <h4 className="font-title text-center">Analysis and Drills</h4>
          <p className="my-2 text-center">
            During each session we will assess players’ throwing form and take
            them through a progression of drills and explanations that will help
            build more efficient mechanics.
          </p>
        </div>
        <div className="py-4 md:pb-0 md:pt-8 px-10 flex-1 border-gray-light border-t md:border-t-0 md:border-l">
          <h4 className="font-title text-center">Player Benefit</h4>
          <p className="my-2 text-center">
            Players will gain new knowledge about throwing mechanics, learn
            about the specific parts of their own technique that they can
            improve upon, and become equipped with simple drills to develop
            their skills.
          </p>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        poster={analysisPlaceholder}
        className="max-w-2xl w-full my-8 self-center"
      >
        <source src={huckAnalysis} type="video/mp4"></source>
      </video>

      <button className="h-16 md:h-12 mt-2 px-10 self-center bg-yellow flex items-center text-gray-light shadow-md text-lg font-bold uppercase">
        <span className="text-shadow-sm">Contact us about a clinic</span>
      </button>
    </div>
  );
}

export default ThrowingClinic;
