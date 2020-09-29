import React from "react";
import "../tailwind.output.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFastForward } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

function WhyTrain() {
  return (
    <div className="p-6 pt-20 pb-12 max-w-6xl container text-gray-light flex flex-col md:flex-row">
      <div
        id="why-train-desc"
        className="mx-auto mb-8 md:mr-12 max-w-sm lg:max-w-md"
      >
        <h2 className="text-gray-light uppercase font-title text-2xl mt-4">
          Why Train With Us?
        </h2>
        <div className="w-48 h-4 bg-teal-bright"></div>
        <p className="font-sans font-light my-3">
          These are just a few of the benefits you could experience by working
          with us on your throwing mechanics. Learning how to throw efficiently
          and properly can raise your game in countless ways.
        </p>
        <Link
          to="/services"
          className="block font-title underline text-right text-sm opacity-75 hover:opacity-100 transition duration-100 ease-in-out"
        >
          View our services
        </Link>
      </div>
      <div className="flex-grow-1"></div>
      <div className="m-auto md:ml-auto font-sans text-lg text-gray-light">
        <ul className="whitespace-no-wrap">
          <li className="py-4 pr-16 pl-8 border-b border-gray-light md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faDumbbell} />
            <span className="pl-12 lg:pl-24">Increased throwing power</span>
          </li>
          <li className="py-4 pr-16 pl-8 border-b border-gray-light md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faRuler} />
            <span className="pl-12 lg:pl-24">Add distance to your throws</span>
          </li>
          <li className="py-4 pr-16 pl-8 border-b border-gray-light md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faSpinner} />
            <span className="pl-12 lg:pl-24">Better consistency of throws</span>
          </li>
          <li className="py-4 pr-16 pl-8 border-b border-gray-light md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faFastForward} />
            <span className="pl-12 lg:pl-24">Faster break throws</span>
          </li>
          <li className="py-4 pr-16 pl-8 border-b border-gray-light md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faArrowsAltH} />
            <span className="pl-12 lg:pl-24">Wider range of throws</span>
          </li>
          <li className="py-4 pr-16 pl-8 border-b border-gray-light md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
            <FontAwesomeIcon icon={faWind} />
            <span className="pl-12 lg:pl-24">
              Improved ability to throw in wind
            </span>
          </li>
          <li className="p-4 md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
            Much more...
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhyTrain;
