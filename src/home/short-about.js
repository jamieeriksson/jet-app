import React from "react";
import "../tailwind.output.css";

class ShortAbout extends React.Component {
  render() {
    return (
      <div className="md:mt-24 p-6 max-w-6xl container font-sans text-gray-dark flex flex-col md:flex-row">
        <div className="mt-6 md:mt-0 mx-4">
          <h3 className="uppercase">Our Goals</h3>
          <p className="font-light">
            We want to expand access to throwing skill development through
            coaching, teaching, and empowering the players of our sport. We
            think that if you understand throwing mechanics theory - theory
            we've spent thousands of hours learning, experimenting with, and
            perfecting - learning to throw doesn't have to be a lifetime
            journey. We think throwers can develop a solid base in a matter of
            months. They just need the right information and dedicated coaching.
          </p>
        </div>
        <div className="my-6 md:my-0 mx-4">
          <h3 className="uppercase">1-on-1 Approach</h3>
          <p className="font-light">
            Coaching throwing is highly specific and individualized. A
            cookie-cutter approach rarely works. Everyone is built differently
            with varying levels of mobility, strength, and structural make-up.
            As a result, certain cues or drills may help one person, but impede
            another. We have found that generalized drills and coaching often
            lead to players developing bad habits in light of these
            individualized differences. We strongly believe that a one-on-one
            consultation approach is the best way to help players improve their
            throwing mechanics.
          </p>
        </div>
      </div>
    );
  }
}

export default ShortAbout;
