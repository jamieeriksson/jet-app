import React from "react";
import "../tailwind.output.css";
import ContactForm from "../contact/contact-form.js";
import { Link } from "react-router-dom";

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
            href="mailto: jamieeriksson@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jamieeriksson@gmail.com
          </a>
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
        <div className="mt-24 flex flex-col items-center">
          <p className="font-title text-2xl">
            Unsure if you want to commit to a full month? Start with a 30 minute
            initial consultation for $50.
          </p>
          <Link
            to="/initial-consult"
            className="h-12 mt-2 px-10 bg-red flex items-center text-gray-light shadow-md text-lg font-bold uppercase"
          >
            Sign Up Here
          </Link>
        </div>
      </div>
    );
  }
}

export default InterestForm;
