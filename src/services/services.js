import React from "react";
import "../tailwind.output.css";
import Footer from "../footer.js";
import { ColorHeader, PageHeader } from "../template-headers.js";
import ServicesOffered from "./services-offered.js";
import Philosophy from "./philosophy.js";
import OurProcess from "./our-process.js";
import InterestForm from "./interest-form.js";

function ServicesContent() {
  return (
    <div className="z-10">
      <PageHeader title={"Services"} />
      <div className="bg-gray-dark -mt-2 z-0">
        <ServicesOffered />
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
        <Philosophy />
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
        <OurProcess />
      </div>
      <svg
        viewBox="0 0 1440 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0L0 124V0H1440Z" fill="#314E4A" />
        <path d="M0 0L1440 177V0H0Z" fill="#313131" />
      </svg>
      <InterestForm />
    </div>
  );
}

function Services() {
  return (
    <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
      <ColorHeader />
      <div className="w-screen h-32 md:h-16 md:hidden bg-light-gray"></div>
      <ServicesContent />
      <div className="flex-grow-1 h-16"></div>
      <Footer />
    </div>
  );
}

export default Services;
