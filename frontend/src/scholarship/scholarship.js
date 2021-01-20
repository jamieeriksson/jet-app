import React from "react";
// import { Link } from "react-router-dom";
import Profiles from "./profiles.js";
import Footer from "../footer.js";
import { ColorHeader, PageHeader } from "../template-headers.js";

function ScholarshipContent() {
  return (
    <div className="z-10">
      <PageHeader title={"Scholarship"} />
      <div className="bg-gray-dark -mt-2 z-0">
        <Profiles />
      </div>
      <svg
        viewBox="0 0 1440 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 115V0H0V115H1440Z" fill="#314E4A" />
        <path d="M0 0L1440 115V0H0Z" fill="#313131" />
      </svg>

      <div className="bg-teal -mt-2 z-0">{/* <Philosophy /> */}</div>
      <svg
        viewBox="0 0 1440 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V115H1440V0H0Z" fill="#314E4A" />
        <path d="M0 115L1440 0V115H0Z" fill="#313131" />
      </svg>

      <div className="bg-gray-dark -mt-2 z-0">{/* <OurProcess /> */}</div>
      <svg
        viewBox="0 0 1440 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0L0 124V0H1440Z" fill="#314E4A" />
        <path d="M0 0L1440 177V0H0Z" fill="#313131" />
      </svg>

      {/* <InterestForm />
      <div className="mt-8 flex flex-col items-center">
        <p className="font-title text-center text-2xl">
          Unsure if you want to commit to a full month? Start with a{" "}
          <span className="font-bold">$40 one time video consultation.</span>
        </p>
        <Link
          to="/initial-consult"
          className="h-12 mt-2 mb-10 px-10 bg-red flex items-center text-gray-light shadow-md text-lg font-bold uppercase"
        >
          Sign Up Here
        </Link>

        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 177l1440-91v91z" fill="#314e4a" />
          <path d="M1440 177L0 0v177z" fill="#313131" />
        </svg>
        <div className="bg-gray-dark w-full z-0">
          <ClinicRedirect />
        </div>
      </div> */}
    </div>
  );
}

function Scholarship() {
  return (
    <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
      <ColorHeader />
      <div className="w-screen h-32 md:h-16 md:hidden bg-light-gray"></div>
      <ScholarshipContent />
      <Footer />
    </div>
  );
}

export default Scholarship;
