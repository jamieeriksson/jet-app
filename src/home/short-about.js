import React from "react";
import "../tailwind.output.css";

class ShortAbout extends React.Component {
  render() {
    return (
      <div className="md:mt-24 p-6 max-w-6xl container font-sans text-gray-dark flex flex-col md:flex-row">
        <div className="mt-6 md:mt-0 mx-4">
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
        <div className="my-6 md:my-0 mx-4">
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

export default ShortAbout;
