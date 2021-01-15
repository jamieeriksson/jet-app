import React from "react";
import "../tailwind.output.css";

class OurPhilosophy extends React.Component {
  render() {
    return (
      <div className="bg-gray-dark -mt-2 z-0">
        <div className="p-6 max-w-6xl container font-sans text-gray-light">
          <h3 className="uppercase font-light">Our Philosophy</h3>
          <h4 className="text-2xl">
            A technique-driven, fundamentals-focused approach to throwing skills
            development.
          </h4>
          <p className="font-light">
            Our approach to throwing training is to come up with unique and
            creative drills that bias your body into using better technique. One
            of the biggest downfalls of the current approach to training and
            learning how to throw in ultimate is that it is not nuanced enough.
            In any other sport, people spend countless hours refining very
            specific aspects of their technique. In ultimate the status quo is
            often, “throw a lot and you will eventually figure it out”.
            Considering most people are not taught proper mechanics to begin
            with, this means countless players spend significant time practicing
            and solidifying poor throwing mechanic habits. For a player wanting
            to improve, this is both inefficient and limiting to their
            abilities. We are here to change that. Our coaching is designed to
            train proper technique and help you reach your potential as a
            thrower.
          </p>
        </div>
      </div>
    );
  }
}

export default OurPhilosophy;
