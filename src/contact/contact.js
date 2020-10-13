import React from "react";
import "../tailwind.output.css";
import ContactForm from "./contact-form.js";
import Footer from "../footer.js";
import { ColorHeader, PageHeader } from "../template-headers.js";

function ContactContent() {
  return (
    <div className="z-10">
      <PageHeader title={"Contact"} />
      <div className="bg-gray-dark -mt-2 z-0">
        <div className="p-6 pb-24 max-w-6xl container flex flex-col text-gray-light">
          <h3 className="self-end font-title uppercase text-3xl">
            Get in touch with us
          </h3>
          <div className="self-end w-48 h-6 bg-teal-bright mb-6"></div>
          <p className="max-w-2xl self-end text-right text-lg">
            If you're interested in our services, or have any questions, fill
            out the form below or send an email to{" "}
            <a
              href="mailto: contact@jethrowing.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@jethrowing.com
            </a>
          </p>
          <div className="ml-4 mt-12 max-w-3xl">
            <ContactForm />
          </div>
        </div>
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

function Contact() {
  return (
    <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
      <ColorHeader />
      <div className="w-screen h-32 md:h-16 md:hidden bg-light-gray"></div>
      <ContactContent />
      <div className="flex-grow-1 h-16"></div>
      <Footer />
    </div>
  );
}

export default Contact;
