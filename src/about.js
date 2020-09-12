import React from "react";
import Footer from "./footer.js";
import "./tailwind.output.css";
import logo from "./assets/logo.svg";
import jamiePhoto from "./assets/jamie-photo.png";
import harrisonPhoto from "./assets/harrison-photo.png";

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

class TeamMemberDesc extends React.Component {
  render() {
    return (
      <div className="flex flex-col mb-6 -ml-2 md:flex-row md:mt-2">
        <img
          src={this.props.photo}
          alt={`Profile of ${this.props.name}`}
          className="inline-block h-64"
        />
        <div className="flex flex-col ml-4 justify-center">
          <h4 className="text-2xl">{this.props.name}</h4>
          <p className="font-light">{this.props.teamMemberDesc}</p>
        </div>
      </div>
    );
  }
}

function AboutContent() {
  return (
    <div className="z-10">
      <div id="the-team">
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
        <div className="bg-gray-dark -mt-2 z-0">
          <div className="p-6 max-w-6xl container font-sans text-gray-light">
            <h3 className="uppercase text-lg mt-3 md:mt-0">The Team</h3>
            <TeamMemberDesc
              name={"Jamie Eriksson"}
              photo={jamiePhoto}
              teamMemberDesc={`Jamie start playing competitive ultimate at UT-Dallas in August 2015. In January of 2016 she dedicated herself to throwing every day for 100 days in a row. From that point on, she developed a passion for learning more about proper throwing technique and refining her throwing skills. This perseverance and dedication helped her make the team rosters for Texas Showdown, the elite women's club team in Texas; Public Enemy, the elite mixed team based out of DFW; and Austin Torch, the first Texas women's professional ultimate team.`}
            />
            <TeamMemberDesc
              name={"Harrison Schwarzer"}
              photo={harrisonPhoto}
              teamMemberDesc={``}
            />
          </div>
        </div>
        <svg
          viewBox="0 0 1440 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 115L5.07832e-05 0V115H1440Z" fill="#314E4A" />
          <path d="M0 7.7486e-07L1440 115V7.7486e-07H0Z" fill="#313131" />
        </svg>
      </div>
      <div id="philosophy">
        <div className="bg-teal -mt-2 z-0">
          <div className="p-6 max-w-6xl container font-sans text-gray-light">
            <h3 className="uppercase text-lg mb-2">Our Philosophy</h3>
            <p className="font-light">
              Our approach to throwing training is to come up with unique and
              creative drills that bias your body into using better technique.
              One of the biggest downfalls of the current approach to training
              and learning how to throw in ultimate is that it is not nuanced
              enough. In any other sport, people spend hours focusing on,
              working, and refining nuanced aspects of their technique, but in
              ultimate the status quo seems to be, “just throw a lot and you’ll
              figure it out”. Considering that most players aren’t even taught
              proper mechanics to begin with, this means several players spend
              hours practicing and solidifying poor throwing mechanic habits.
              We’re here to change that. Our drills are designed to train proper
              technique and help you reach your potential as a thrower.
            </p>
          </div>
        </div>
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 -1.54972e-06L1440 124V-1.54972e-06H0Z" fill="#313131" />
          <path
            d="M1440 -3.63536e-06L0 177V-3.63536e-06H1440Z"
            fill="#314E4A"
          />
        </svg>
      </div>
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
