import React from "react";
import "../tailwind.output.css";
import Benefits from "../services/benefits.js";

function ClinicBenefits() {
  return (
    <div className="p-6 pb-24 max-w-6xl container flex flex-col text-gray-light">
      <h2 className="text-right uppercase font-title text-4xl mt-4">
        What can players get out of it?
      </h2>
      <div className="self-end w-48 h-6 bg-teal-bright mb-12"></div>
      <Benefits />
    </div>
  );
}

export default ClinicBenefits;
