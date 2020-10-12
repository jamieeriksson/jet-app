import React from "react";
import "../tailwind.output.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faFastForward } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function TrainingBenefits() {
  return (
    <div className="bg-gray-dark">
      <div className="flex flex-col mt-24 p-6 max-w-6xl container">
        <h3 className="font-title text-gray-light text-3xl uppercase self-center md:self-end md:mr-32 lg:mr-24">
          JET Training Benefits
        </h3>
        <div className="my-4 self-center grid gap-6 grid-cols-sm-1 md:grid-cols-sm-2 lg:grid-cols-sm-4 grid-flow-row font-sans text-3xl uppercase text-gray-dark">
          <div className="relative h-56 w-56 shadow-lg bg-yellow">
            <p className="px-3 py-2 leading-9">Increased throwing distance</p>
            <FontAwesomeIcon
              icon={faRuler}
              size="3x"
              className="absolute m-2 bottom-0 right-0"
            />
          </div>
          <div className="relative h-56 w-56 shadow-lg bg-red">
            <FontAwesomeIcon
              icon={faEllipsisV}
              size="3x"
              className="absolute m-6 top-0 left-0"
            />
            <p className="absolute bottom-0 right-0 px-3 py-2 text-right leading-9">
              More release points
            </p>
          </div>
          <div className="relative h-56 w-56 shadow-lg bg-teal-bright">
            <p className="absolute right-0 px-3 py-2 text-right leading-9">
              Improved ability to throw in wind
            </p>
            <FontAwesomeIcon
              icon={faWind}
              size="3x"
              className="absolute mb-1 ml-3 bottom-0 left-0"
            />
          </div>
          <div className="relative h-56 w-56 shadow-lg bg-gray-medium">
            <p className="absolute bottom-0 px-3 py-2 leading-9">
              Improved throwing consistency
            </p>
            <FontAwesomeIcon
              icon={faGripLines}
              size="3x"
              className="absolute mt-0 mr-5 top-0 right-0"
            />
          </div>
          <div className="relative h-56 w-56 shadow-lg bg-yellow md:row-start-3 md:col-start-2 lg:row-start-2 lg:col-start-4">
            <p className="absolute bottom-0 right-0 px-4 py-3 text-right leading-9">
              Faster break throws
            </p>
            <FontAwesomeIcon
              icon={faFastForward}
              size="2x"
              className="absolute mt-6 ml-8 top-0 left-0"
            />
          </div>
          <div className="relative h-56 w-56 shadow-lg bg-red md:row-start-3 md:col-start-1 lg:row-start-2 lg:col-start-3">
            <p className="absolute right-0 px-4 py-3 text-right leading-9">
              Better angle control
            </p>
            <FontAwesomeIcon
              icon={faAngleLeft}
              size="4x"
              className="absolute ml-1 -mb-6 bottom-0 left-0 transform rotate-45"
            />
          </div>
          <div className="relative h-56 w-56 shadow-lg bg-teal-bright md:row-start-4 md:col-start-2 lg:row-start-2 lg:col-start-2">
            <p className="absolute bottom-0 left-0 px-3 py-1 leading-9">
              Wider range of throws
            </p>
            <FontAwesomeIcon
              icon={faLayerGroup}
              size="3x"
              className="absolute m-4 top-0 right-0"
            />
          </div>
          <div className="relative h-56 w-56 shadow-lg bg-gray-medium md:row-start-4 md:col-start-1 lg:row-start-2 lg:col-start-1">
            <p className="absolute top-0 right-0 px-3 py-1 text-right leading-9">
              Better control over disc speed
            </p>
            <FontAwesomeIcon
              icon={faFeatherAlt}
              size="3x"
              className="absolute m-2 bottom-0 left-0"
            />
          </div>
        </div>
        <h6 className="mt-16 self-end font-title text-gray-light opacity-75">
          Interested in getting coached?
        </h6>
        <Link
          to="/services"
          className="h-12 self-end bg-teal-dark flex items-center text-gray-light text-lg uppercase px-10"
        >
          See our services
        </Link>
      </div>
    </div>
  );
}

export default TrainingBenefits;
