import React from "react";
import "../tailwind.output.css";

import Footer from "../footer.js";
import { ColorHeader, PageHeader } from "../template-headers.js";
import ThrowingClinics from "./throwing-clinics.js";
import SafetyMeasures from "./safety-measures.js";
import ClinicBenefits from "./clinic-benefits.js";
import ClinicInterest from "./clinic-interest.js";

class ClinicsContent extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.handleScrollClick = this.handleScrollClick.bind(this);
  }

  handleScrollClick() {
    this.formRef.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className="z-10">
        <PageHeader title={"Clinics"} />
        <div className="bg-gray-dark -mt-2 z-0">
          <ThrowingClinics />
          <div className="flex flex-col pt-4 pb-24">
            <button
              onClick={this.handleScrollClick}
              className="mx-6 h-16 md:h-12 mt-2 px-10 self-center bg-yellow flex items-center text-gray-light shadow-md text-lg font-bold uppercase"
            >
              <span className="text-shadow-sm">Contact us about a clinic</span>
            </button>
          </div>
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
          <SafetyMeasures />
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
          <ClinicBenefits />
        </div>
        <svg
          viewBox="0 0 1440 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 0L0 124V0H1440Z" fill="#314E4A" />
          <path d="M0 0L1440 177V0H0Z" fill="#313131" />
        </svg>
        <div ref={this.formRef} className="pt-12">
          <ClinicInterest />
        </div>
      </div>
    );
  }
}

function Clinics() {
  return (
    <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
      <ColorHeader />
      <div className="w-screen h-32 md:h-16 md:hidden bg-light-gray"></div>
      <ClinicsContent />
      <div className="flex-grow-1 md:h-16"></div>
      <Footer />
    </div>
  );
}

export default Clinics;
