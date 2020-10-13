import React from "react";
import "../tailwind.output.css";
import { Link } from "react-router-dom";

function ClinicRedirect() {
  return (
    <div className="p-6 pb-16 md:pb-24 max-w-6xl container flex flex-col text-gray-light">
      <p className="mb-2 ml-2 font-title uppercase text-2xl">
        Searching for group services? Are you...
      </p>
      <div className="p-4 flex flex-col md:flex-row justify-center place-items-center bg-gray-54 text-center text-lg font-title shadow-md">
        <p className="flex-1 p-6">
          A team looking to improve the throwing abilities of your players?
        </p>
        <p className="flex-1 p-6 border-t-4 md:border-t-0 md:border-l-4 border-gray-dark">
          An organization looking to offer an opportunity for your players to
          grow and stay engaged with ultimate?
        </p>
      </div>
      <p className="mt-6 mb-4 self-center font-light text-lg text-center">
        Check out our socially distanced throwing mechanics clinics
      </p>
      <Link
        to="/clinics"
        className="self-center h-12 mt-2 px-10 bg-teal-bright flex items-center text-gray-light shadow-md text-lg font-bold uppercase"
      >
        See our clinics
      </Link>
    </div>
  );
}

export default ClinicRedirect;
