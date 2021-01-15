import React from "react";
import "../tailwind.output.css";
import Footer from "../footer.js";
import { ColorHeader, PageHeader } from "../template-headers.js";

function NotFoundContent() {
  return (
    <div className="z-10">
      <PageHeader title={"Not Found"} />
      <div className="bg-gray-dark -mt-2 z-0">
        <div className="p-6 py-48 max-w-6xl container flex flex-col text-gray-light text-6xl font-title">
          <p className="self-center">Page Not Found</p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
      <ColorHeader />
      <div className="w-screen h-32 md:h-16 md:hidden bg-light-gray"></div>
      <NotFoundContent />
      <Footer />
    </div>
  );
}

export default Services;
