import React from "react";
import "./tailwind.output.css";
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

import throwingPlaceholder from "./assets/placeholder.png";
import throwingVideo from "./assets/Slomo-Throwing-Short-6.m4v";
import Footer from "./footer.js";

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
              Up Your Game.
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

class OurPhilosophy extends React.Component {
  render() {
    return (
      <div className="bg-gray-dark -mt-2 z-0">
        <div className="p-6 max-w-6xl container font-sans text-gray-light">
          <h3 className="uppercase font-light">Our Philosophy</h3>
          <h4 className="text-2xl">
            A technique driven and fundamentals focused approach to throwing
            skills development.
          </h4>
          <p className="font-light">
            Our approach to throwing training is to come up with unique and
            creative drills that bias your body into using better technique. One
            of the biggest downfalls of the current approach to training and
            learning how to throw in ultimate is that it is not nuanced enough.
            In any other sport, people spend hours focusing on, working, and
            refining nuanced aspects of their technique, but in ultimate the
            status quo is often, “throw a lot and you’ll figure it out”.
            Considering that most players aren’t taught proper mechanics to
            begin with, this means several players spend hours practicing and
            solidifying poor throwing mechanic habits. We’re here to change
            that. Our training is designed to teach proper technique and help
            you reach your potential as a thrower.
          </p>
        </div>
      </div>
    );
  }
}

class OneOnOneApproach extends React.Component {
  render() {
    return (
      <div className="mt-24 p-6 max-w-6xl container font-sans text-gray-dark flex flex-col md:flex-row">
        <div className="mx-4">
          <h3 className="uppercase">Our Goals</h3>
          <p className="font-light">
            We believe that throwing is an underappreciated part of the sport of
            ultimate. Currently, too few ultimate players have access to proper
            throwing mechanics coaching. I have had to spend countless hours
            learning, experimenting, and perfecting throwing mechanics theory -
            theory which should only take a player a few months to learn. We
            want to expand access to throwing skills development by coaching,
            teaching, and empowering the players of our sport.
          </p>
        </div>
        <div className="mx-4">
          <h3 className="uppercase">1-on-1 Approach</h3>
          <p className="font-light">
            Throwing is a hands on, highly individualized skill. Everyone is
            different. Certain cues or drills may help one person, but impede
            another. We've found that generalized drills and coaching rarely
            help athletes improve their mechanics. As a result, we strongly
            believe that a one-on-one consultation approach is the best way to
            help players improve throwing mechanics.
          </p>
        </div>
      </div>
    );
  }
}

function TrainingBenefits() {
  return (
    <div className="bg-gray-dark">
      <div className="flex flex-col mt-24 p-6 max-w-6xl container">
        <h3 className="font-title text-gray-light text-3xl uppercase self-center md:self-end md:mr-32 lg:mr-24">
          JET Training Benefits
        </h3>
        <div className="my-4 self-center grid gap-6 grid-cols-sm md:grid-cols-md lg:grid-cols-lg grid-flow-row font-sans text-3xl uppercase text-gray-dark">
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
        <div className="h-12 self-end bg-teal-dark flex items-center">
          <Link
            to="/services"
            className="text-gray-light text-lg uppercase mx-10"
          >
            See our services
          </Link>
        </div>
      </div>
    </div>
  );
}

class Home extends React.Component {
  render() {
    return (
      <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
        <div className="w-screen h-16 md:h-12 bg-light-gray"></div>
        <HomeHeader />
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 177L5.07832e-05 86V177H1440Z" fill="#314E4A" />
          <path d="M0 177L1440 0V177H0Z" fill="#313131" />
        </svg>
        <OurPhilosophy />
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5.75185e-06L1440 115V5.75185e-06H0Z" fill="#314E4A" />
          <path d="M1440 0L0 177V0H1440Z" fill="#313131" />
        </svg>
        <OneOnOneApproach />
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 177L5.07832e-05 86V177H1440Z" fill="#314E4A" />
          <path d="M0 177L1440 0V177H0Z" fill="#313131" />
        </svg>
        <TrainingBenefits />
        <div className="flex-grow-1 h-16 bg-gray-dark"></div>
        <Footer />
      </div>
    );
  }
}

export default Home;
