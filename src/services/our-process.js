import React from "react";
import "../tailwind.output.css";

function OurProcess() {
  return (
    <div className="p-6 pb-16 md:pb-24 max-w-6xl container flex flex-col text-gray-light">
      <h2 className="text-right uppercase font-title text-4xl mt-4">
        Our Process
      </h2>
      <div className="self-end w-48 h-6 bg-teal-bright mb-12"></div>
      <ul className="max-w-3xl self-center font-light mb-6 md:mb-12">
        <li>
          <span className="font-title text-lg">1.</span> We work to get to know
          you and understand what your throwing goals are.
        </li>
        <li>
          <span className="font-title text-lg">2.</span> We will analyze video
          of your initial throwing mechanics.
        </li>
        <li>
          <span className="font-title text-lg">3.</span> We craft drills and
          compile feedback regarding your mechanics and your goals.
        </li>
        <li>
          <span className="font-title text-lg">4.</span> We schedule a video
          call to go over your mechanics and the drills.
        </li>
        <li>
          <span className="font-title text-lg">5.</span> You get at least a
          month of communication and coaching from us. This includes consistent
          feedback and adjustments to your technique and the drills as you
          progress.
        </li>
      </ul>
      <div className="self-center flex flex-col max-w-sm px-12 md:max-w-6xl md:flex-row font-sans text-gray-light">
        <div className="my-6 md:my-12">
          <h3 className="font-title text-2xl uppercase">
            What we can help you with
          </h3>
          <ul>
            <li>- Backhand technique</li>
            <li>- Forehand technique</li>
            <li>- Pivoting mechanics</li>
            <li>- Break throw angles, release, and speed</li>
            <li>- Hucking distance, power, and consistency</li>
          </ul>
        </div>
        <div className="my-6 md:my-12 md:ml-12">
          <h3 className="font-title text-2xl uppercase">
            Form aspects we analyze
          </h3>
          <ul>
            <li>- Grip</li>
            <li>- Wind up</li>
            <li>- Release</li>
            <li>- Balance</li>
            <li>- Core engagement</li>
            <li>- Lower body use</li>
            <li>- Throwing stance</li>
          </ul>
        </div>
        <div className="my-6 md:my-12 md:ml-12">
          <h3 className="font-title text-2xl uppercase">
            Benefits of our technique work
          </h3>
          <ul>
            <li>- Add distance to your throws</li>
            <li>- Improved throwing consistency</li>
            <li>- Faster break throws</li>
            <li>- Better angle and speed control</li>
            <li>- Wider range of release points</li>
            <li>- Improved ability to throw in wind</li>
            <li>
              - More convincing fakes and improved ability to move the mark
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
