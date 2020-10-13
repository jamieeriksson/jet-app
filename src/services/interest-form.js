import React from "react";
import "../tailwind.output.css";
import ContactForm from "../contact/contact-form.js";

class InterestForm extends React.Component {
  render() {
    return (
      <div className="p-6 pt-12 pb-24 max-w-6xl container text-gray-dark">
        <h3 className="font-title uppercase text-3xl">
          Interested in working with us?
        </h3>
        <div className="w-48 h-6 bg-teal-bright mb-6"></div>
        <p className="font-title text-lg">
          Fill out the form below or send an email to{" "}
          <a
            href="mailto: contact@jethrowing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@jethrowing.com
          </a>
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default InterestForm;
