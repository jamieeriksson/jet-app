import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../tailwind.output.css";

import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function ServicesOffered() {
  return (
    <div className="p-6 pb-24 max-w-6xl container flex flex-col text-gray-light">
      <h2 className="text-right uppercase font-title text-4xl mt-4">
        What We Offer
      </h2>
      <div className="self-end w-48 h-6 bg-teal-bright mb-12"></div>
      <div className="grid grid-cols-md-1 md:grid-cols-md-2 gap-20 md:gap-24 self-center">
        <div className="flex flex-col items-center">
          <h4 className="text-2xl mb-2">Video Analysis</h4>
          <FontAwesomeIcon icon={faFilm} size="9x" color="#EEEEEE" />
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-2xl mb-2">1-on-1 Coaching</h4>
          <FontAwesomeIcon icon={faPeopleArrows} size="9x" color="#EEEEEE" />
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-2xl mb-2">Individualized Feedback</h4>
          <FontAwesomeIcon icon={faEdit} size="9x" color="#EEEEEE" />
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-2xl mb-2">Personalized Drills</h4>
          <FontAwesomeIcon icon={faFileAlt} size="9x" color="#EEEEEE" />
        </div>
      </div>
    </div>
  );
}

export default ServicesOffered;
