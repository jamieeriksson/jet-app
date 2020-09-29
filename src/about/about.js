import React from "react";
import "../tailwind.output.css";
import Footer from "../footer.js";
import AboutUsSections from "./about-sections.js";
import TheTeam from "./the-team.js";
import WhyTrain from "./why-train.js";
import { ColorHeader, PageHeader } from "../template-headers.js";

function AboutContent() {
  return (
    <div className="z-10">
      <PageHeader title={"About"} />
      <div className="bg-gray-dark -mt-2 z-0">
        <AboutUsSections />
      </div>
      <svg
        viewBox="0 0 1440 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 115V0H0V115H1440Z" fill="#314E4A" />
        <path d="M0 0L1440 115V0H0Z" fill="#313131" />
      </svg>
      <div className="bg-teal -mt-2 z-0">
        <TheTeam />
      </div>
      <svg
        viewBox="0 0 1440 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V115H1440V0H0Z" fill="#314E4A" />
        <path d="M0 115L1440 0V115H0Z" fill="#313131" />
      </svg>

      <div className="bg-gray-dark -mt-2 z-0">
        <WhyTrain />
      </div>
      <svg
        viewBox="0 0 1440 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0L0 124V0H1440Z" fill="#314E4A" />
        <path d="M0 0L1440 177V0H0Z" fill="#313131" />
      </svg>
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
