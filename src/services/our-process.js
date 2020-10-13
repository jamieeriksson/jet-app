import React from "react";
import "../tailwind.output.css";
import Benefits from "./benefits.js";

function OurProcess() {
  return (
    <div className="p-6 pb-16 md:pb-24 max-w-6xl container flex flex-col text-gray-light">
      <h2 className="text-right uppercase font-title text-4xl mt-4">
        Our Process
      </h2>
      <div className="self-end w-48 h-6 bg-teal-bright mb-12"></div>
      <ul className="max-w-3xl self-center font-light mb-6 md:mb-12">
        <li>
          <span className="font-title text-lg">1.</span> We work to get to know
          you and understand what your throwing goals are.
        </li>
        <li>
          <span className="font-title text-lg">2.</span> We will analyze video
          of your initial throwing mechanics.
        </li>
        <li>
          <span className="font-title text-lg">3.</span> We craft drills and
          compile feedback regarding your mechanics and your goals.
        </li>
        <li>
          <span className="font-title text-lg">4.</span> We schedule a video
          call to go over your mechanics and the drills.
        </li>
        <li>
          <span className="font-title text-lg">5.</span> You get at least a
          month of communication and coaching from us. This includes consistent
          feedback and adjustments to your technique and the drills as you
          progress.
        </li>
      </ul>
      <Benefits />
    </div>
  );
}

export default OurProcess;
