import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFastForward } from "@fortawesome/free-solid-svg-icons";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

import Footer from "./footer.js";
import "./tailwind.output.css";
import logo from "./assets/logo.svg";
import jamiePhoto from "./assets/jamie-photo.png";
import harrisonPhoto from "./assets/harrison-photo.png";
import lightbulbIcon from "./assets/lightbulb-solid.svg";

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

function Title() {
  return (
    <div className="absolute w-screen flex justify-center items-center h-full">
      <div className="pl-5 md:pl-0 md:flex-grow-1"></div>
      <h1 className="font-title text-5xl uppercase text-gray-dark tracking-widest rotate mb-12 md:text-6xl lg:mb-8 xl:mb-5">
        About
      </h1>
      <div className="flex-grow-10 lg:flex-grow-6 xl:flex-grow-4"></div>
    </div>
  );
}

function AboutHeader() {
  return (
    <div id="upper-triangles" className="relative">
      <Title />
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

function AboutUs() {
  return (
    <div className="p-6 pb-24 max-w-6xl container flex flex-col">
      <h2 className="text-right text-gray-light uppercase font-title text-4xl mt-4">
        Jamie Eriksson Throwing
      </h2>
      <div className="self-end w-48 h-6 bg-teal-bright mb-12"></div>
      <div className="flex flex-col md:flex-row font-sans text-gray-light">
        <div className="p-4 md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
          <h3 className="font-title text-lg uppercase">Who We Are</h3>
          <p className="font-light">
            We are a small team of coaches passionate about the game of ultimate
            and the development of its players. We understand the importance of
            throwing in our sport and see it as an integral part of a player’s
            development. We have spent countless hours analyzing efficient
            throwing mechanics and developing methods for coaching players on
            them.
          </p>
        </div>
        <div className="p-4 border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-gray-100 md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
          <h3 className="font-title text-lg uppercase">What We Do</h3>
          <p className="font-light">
            We coach players on efficient throwing mechanics through a
            consultation based approach. We analyze the form of individual
            players and give them feedback in a one-on-one setting. We then
            curate a program of throwing drills which address aspects of their
            form and help them achieve better mechanics.
          </p>
        </div>
        <div className="p-4 md:opacity-75 hover:opacity-100 transition duration-100 ease-in-out">
          <h3 className="font-title text-lg uppercase">What We Believe In</h3>
          <p className="font-light">
            We strongly believe that throwing mechanics are currently an
            extremely underdeveloped part of ultimate. Many players, even at the
            elite level, have unaccessed potential due to poor and unaddressed
            throwing form. We want to help players of all levels improve their
            game by committing ourselves to the understanding and coaching of
            throwing technique.
          </p>
        </div>
      </div>
    </div>
  );
}

class TheTeam extends React.Component {
  render() {
    return (
      <div className="p-6 max-w-6xl container font-sans text-gray-light">
        <h3 className="uppercase text-3xl font-title mt-3 lg:mt-2 xl:mt-0">
          The Team
        </h3>
        <div className="w-48 h-6 bg-teal-bright mb-12"></div>
        <div className="flex flex-col mb-6 -ml-2 md:flex-row md:mt-2">
          <img
            src={jamiePhoto}
            alt={`Profile of Jamie Eriksson`}
            className="inline-block h-64 w-64 self-center"
          />
          <div className="flex flex-col ml-4 mr-10 justify-center">
            <h4 className="text-2xl">Jamie Eriksson</h4>
            <p className="font-light">
              Jamie start playing competitive ultimate at UT-Dallas in August
              2015. In January of 2016 she dedicated herself to throwing every
              day for 100 days in a row. From that point on, she developed a
              passion for learning more about proper throwing technique and
              refining her throwing skills. This perseverance and dedication
              helped her make the team rosters for Texas Showdown, the elite
              women's club team in Texas; Public Enemy, the elite mixed team
              based out of DFW; and Austin Torch, the first Texas women's
              professional ultimate team. Jamie brings a creative, dedicated,
              and detailed approach to the skill development of those she
              coaches.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-6 -ml-2 md:flex-row md:mt-2">
          <div className="flex flex-col ml-10 mr-4 justify-center">
            <h4 className="text-2xl">Harrison</h4>
            <p className="font-light">
              Harrison has studied ultimate and throwing mechanics intensively.
              He currently coaches Dallas Public Enemy and the Western Ultimate
              League's Arizona Sidewinders. Harrison won Ultiworld's 2nd
              Runner-Up Coach of the Year for the 2019 Mixed division after
              coaching the team, who wasn't expected to qualify for Nationals,
              to a 7th place finish. He brings a modern and intelligent approach
              to ultimate training and skill development.
            </p>
          </div>
          <img
            src={harrisonPhoto}
            alt={`Profile of Harrison`}
            className="inline-block h-64 w-64 self-center"
          />
        </div>
      </div>
    );
  }
}

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

function AboutContent() {
  return (
    <div className="z-10">
      <AboutHeader />
      <div className="bg-gray-dark -mt-2 z-0">
        <AboutUs />
      </div>
      <svg
        viewBox="0 0 1440 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 115V0H0V115H1440Z" fill="#314E4A" />
        <path d="M0 0L1440 115V0H0Z" fill="#313131" />
      </svg>
      <div className="bg-teal -mt-2 z-0">
        <TheTeam />
      </div>
      <svg
        viewBox="0 0 1440 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V115H1440V0H0Z" fill="#314E4A" />
        <path d="M0 115L1440 0V115H0Z" fill="#313131" />
      </svg>

      <div className="bg-gray-dark -mt-2 z-0">
        <WhyTrain />
      </div>
      <svg
        viewBox="0 0 1440 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0L0 124V0H1440Z" fill="#314E4A" />
        <path d="M0 0L1440 177V0H0Z" fill="#313131" />
      </svg>
    </div>
  );
}

function About() {
  return (
    <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
      <ColorHeader />
      <div className="w-screen h-32 md:h-16 md:hidden bg-light-gray"></div>
      <AboutContent />
      <div className="flex-grow-1 h-48"></div>
      <Footer />
    </div>
  );
}

export default About;
