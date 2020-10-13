import React from "react";
import "../tailwind.output.css";
import jamiePhoto from "../assets/jamie-photo.png";
import harrisonPhoto from "../assets/harrison-photo.png";

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
          <div className="flex flex-col ml-4 md:mr-10 justify-center">
            <h4 className="text-2xl">Jamie Eriksson</h4>
            <p className="font-light">
              Jamie start playing competitive ultimate at UT-Dallas in August
              2015. In January of 2016 she dedicated herself to throwing every
              day for 100 days in a row. From that point on, she developed a
              passion for learning more about proper throwing technique and
              refining her throwing skills. This perseverance and dedication
              helped her make the team rosters for Texas Showdown, the elite
              women's club team in Texas; Dallas Public Enemy, the elite mixed
              team based out of DFW; and Austin Torch, the first Texas women's
              professional ultimate team. Jamie brings a creative, dedicated,
              and detailed approach to the skill development of those she
              coaches.
            </p>
          </div>
        </div>
        <div className="flex flex-col mb-6 -ml-2 md:flex-row md:mt-2">
          <div className="flex flex-col ml-4 md:ml-10 mr-4 justify-center order-2 md:order-1">
            <h4 className="text-2xl">Harrison</h4>
            <p className="font-light">
              Harrison has studied ultimate and throwing mechanics intensively.
              He currently coaches Dallas Public Enemy and the Western Ultimate
              League's Arizona Sidewinders. Harrison won Ultiworld's 2nd
              Runner-Up Coach of the Year for the 2019 Mixed division after
              coaching Public Enemy, who wasn't expected to qualify for
              Nationals, to a 7th place finish. He brings a modern and
              intelligent approach to ultimate training and throwing skills
              development.
            </p>
          </div>
          <img
            src={harrisonPhoto}
            alt={`Profile of Harrison`}
            className="inline-block h-64 w-64 self-center order-1 md:order-2"
          />
        </div>
      </div>
    );
  }
}

export default TheTeam;
