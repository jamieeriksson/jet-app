import React from "react";
import "../tailwind.output.css";
import { Link } from "react-router-dom";
import HomeHeader from "./header.js";
import OurPhilosophy from "./our-philosophy.js";
import ShortAbout from "./short-about.js";
import TrainingBenefits from "./training-benefits.js";

import Footer from "../footer.js";

class Home extends React.Component {
  render() {
    return (
      <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
        <div className="w-screen h-16 md:h-12 bg-light-gray"></div>
        <HomeHeader />
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 177L5.07832e-05 86V177H1440Z" fill="#314E4A" />
          <path d="M0 177L1440 0V177H0Z" fill="#313131" />
        </svg>
        <OurPhilosophy />
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5.75185e-06L1440 115V5.75185e-06H0Z" fill="#314E4A" />
          <path d="M1440 0L0 177V0H1440Z" fill="#313131" />
        </svg>
        <ShortAbout />
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 177L5.07832e-05 86V177H1440Z" fill="#314E4A" />
          <path d="M0 177L1440 0V177H0Z" fill="#313131" />
        </svg>
        <TrainingBenefits />
        <div className="flex-grow-1 h-16 bg-gray-dark"></div>
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 5.75185e-06L1440 115V5.75185e-06H0Z" fill="#314E4A" />
          <path d="M1440 0L0 177V0H1440Z" fill="#313131" />
        </svg>
        <div className="my-24 flex flex-col items-center">
          <p className="font-title text-center text-2xl">
            Want to try us out? Start with a{" "}
            <span className="font-bold">$50 one time video consultation.</span>
          </p>
          <Link
            to="/initial-consult"
            className="h-12 mt-2 px-10 bg-red flex items-center text-gray-light shadow-md text-lg font-bold uppercase"
          >
            Sign Up Here
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
