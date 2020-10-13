import React from "react";
import "../tailwind.output.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedkit } from "@fortawesome/free-solid-svg-icons";

function SafetyMeasures() {
  return (
    <div className="p-6 pb-24 max-w-6xl container flex flex-col text-gray-light">
      <div className="flex mb-12">
        <FontAwesomeIcon
          icon={faMedkit}
          size="5x"
          color="#EEEEEE"
          className="self-end mr-5"
        />
        <div className="">
          <h2 className="uppercase font-title text-4xl mt-4">
            Safety Measures
          </h2>
          <div className="w-48 h-6 bg-teal-bright"></div>
        </div>
      </div>

      <div className="self-center flex flex-col font-title text-lg mx-12 w-full md:max-w-3xl lg:max-w-4xl">
        <div className="pl-4 py-1 my-2 h-16 flex place-items-center bg-gray-54 shadow-md">
          <div className="bg-red w-1 h-10"></div>
          <p className="px-4">
            Each hour will have a maximum of 2-4 people to reduce interactions
            between people.
          </p>
        </div>
        <div className="pl-4 py-1 my-2 h-16 flex place-items-center bg-gray-54 shadow-md">
          <div className="bg-yellow w-1 h-10"></div>
          <p className="px-4">There is no need to share equipment.</p>
        </div>
        <div className="pl-4 py-1 my-2 h-16 flex place-items-center bg-gray-54 shadow-md">
          <div className="bg-teal-bright w-1 h-10"></div>
          <p className="px-4">
            All drills and learning can be done without a throwing partner, if
            desired.
          </p>
        </div>
        <div className="pl-4 py-1 my-2 h-16 flex place-items-center bg-gray-54 shadow-md">
          <div className="bg-red w-1 h-10"></div>
          <p className="px-4">
            Participants will be able to maintain at least 6 feet of distance
            from other people.
          </p>
        </div>
        <div className="pl-4 py-1 my-2 h-16 flex place-items-center bg-gray-54 shadow-md">
          <div className="bg-yellow w-1 h-10"></div>
          <p className="px-4">
            The clinic will be hosted outside, or in a well-ventilated space,
            and masks will be required.
          </p>
        </div>
        <div className="pl-4 py-1 my-2 h-16 flex place-items-center bg-gray-54 shadow-md">
          <div className="bg-teal-bright w-1 h-10"></div>
          <p className="px-4">
            Any provided or shared discs which will be sanitized before and
            after each session.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SafetyMeasures;