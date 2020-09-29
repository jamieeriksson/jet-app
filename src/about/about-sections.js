import React from "react";
import "../tailwind.output.css";

function AboutUsSections() {
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

export default AboutUsSections;
