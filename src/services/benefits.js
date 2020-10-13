import React from "react";
import "../tailwind.output.css";

function Benefits() {
  return (
    <div className="self-center flex flex-col max-w-sm md:px-12 md:max-w-6xl md:flex-row font-sans text-gray-light">
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
          <li>- More convincing fakes and improved ability to move the mark</li>
        </ul>
      </div>
    </div>
  );
}

export default Benefits;
