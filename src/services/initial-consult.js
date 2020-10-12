import React from "react";
import "../tailwind.output.css";
import * as emailjs from "emailjs-com";
import Footer from "../footer.js";
import { ColorHeader, PageHeader } from "../template-headers.js";

class InitialConsultForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      yearsPlayed: "",
      teamsPlayed: "",
      throwingLevel: "",
      throwingStrengths: "",
      throwingImprovement: "",
      ableToFilm: "",
      additionalInfo: "",
      errors: {},
      firstError: "",
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.scrollToError = this.scrollToError.bind(this);

    this.nameInput = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    let errors = this.handleValidation();
    console.log(Object.keys(errors).length);

    if (Object.keys(errors).length > 0) {
      this.scrollToError(errors);
    } else {
      const {
        name,
        email,
        yearsPlayed,
        teamsPlayed,
        throwingLevel,
        throwingStrengths,
        throwingImprovement,
        ableToFilm,
        additionalInfo,
      } = this.state;
      let templateParams = {
        user_name: name,
        to_name: "jamieeriksson@gmail.com",
        user_email: email,
        subject: `$50 Initial 30min Consultation - ${name}`,
        years_played: yearsPlayed,
        teams_played: teamsPlayed,
        throwing_level: throwingLevel,
        throwing_strengths: throwingStrengths,
        throwing_improvement: throwingImprovement,
        able_to_film: ableToFilm,
        Additional_anfo: additionalInfo,
      };

      emailjs
        .send(
          "jet_contact_service",
          "initial_consult_template",
          templateParams,
          "user_xGg5HzJ2XhOMaAS6kYTbE"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      this.resetForm();

      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      yearsPlayed: "",
      teamsPlayed: "",
      throwingLevel: "",
      throwingStrengths: "",
      throwingImprovement: "",
      ableToFilm: "",
      additionalInfo: "",
    });
  }

  scrollToError = (errors) => {
    const keys = Object.keys(errors);

    let errorElement = document.querySelector(`input[name="${keys[0]}"]`);

    if (!errorElement) {
      errorElement = document.querySelector(`textarea[name="${keys[0]}"]`);
    }

    errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  handleValidation() {
    let name = this.state.name;
    let email = this.state.email;
    let yearsPlayed = this.state.yearsPlayed;
    let teamsPlayed = this.state.teamsPlayed;
    let throwingLevel = this.state.throwingLevel;
    let throwingStrengths = this.state.throwingStrengths;
    let throwingImprovement = this.state.throwingImprovement;
    let ableToFilm = this.state.ableToFilm;
    let errors = {};

    // Name validation
    if (!name) {
      errors["name"] = "Please enter a name";
    }

    // Email validation
    if (!email) {
      errors["email"] = "Please enter an email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors["email"] = "Please enter a valid email";
    }

    // Years Played validation
    if (!yearsPlayed) {
      errors["yearsPlayed"] = "Please enter a value";
    }

    // Teams Played validation
    if (!teamsPlayed) {
      errors["teamsPlayed"] = "Please enter a value";
    }

    // Throwing Level validation
    if (!throwingLevel) {
      errors["throwingLevel"] = "Please select a value";
    }

    // Throwing Strengths validation
    if (!throwingStrengths) {
      errors["throwingStrengths"] = "Please enter a value";
    }

    // Throwing Improvement validation
    if (!throwingImprovement) {
      errors["throwingImprovement"] = "Please enter a value";
    }

    // Able To Film validation
    if (!ableToFilm) {
      errors["ableToFilm"] = "Please select a value";
    }

    this.setState({ errors: errors });
    return errors;
  }

  render() {
    return (
      <form className="font-semibold max-w-3xl w-full">
        <div className="flex flex-wrap">
          <div className="mt-2 md:mt-0">
            <label>
              Name: <br />
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Your name"
                className="mt-1 mr-10 p-1 w-64 text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
              />
              <p className="text-red text-sm font-thin mt-1 mr-10 w-64">
                {this.state.errors["name"]}
              </p>
            </label>
          </div>

          <div className="mt-2 md:mt-0">
            <label>
              Email: <br />
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
                placeholder="youremail@example.com"
                className="mt-1 p-1 w-64 text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
              />
              <br />
              <p className="text-red text-sm font-thin mt-1 w-64">
                {this.state.errors["email"]}
              </p>
            </label>
          </div>
        </div>

        <div className="mt-8 block">
          <label>
            How many years have you been playing ultimate? <br />
            <input
              name="yearsPlayed"
              type="text"
              value={this.state.yearsPlayed}
              onChange={this.handleChange.bind(this, "yearsPlayed")}
              placeholder=""
              className="mt-1 p-1 w-full text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
            />
            <p className="text-red text-sm font-thin mt-1">
              {this.state.errors["yearsPlayed"]}
            </p>
          </label>
        </div>

        <div className="mt-8 block">
          <label>
            What teams have you played for, if any? (Chronological order)
            <br />
            <input
              name="teamsPlayed"
              type="text"
              value={this.state.teamsPlayed}
              onChange={this.handleChange.bind(this, "teamsPlayed")}
              placeholder=""
              className="mt-1 p-1 w-full text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
            />
            <p className="text-red text-sm font-thin mt-1">
              {this.state.errors["teamsPlayed"]}
            </p>
          </label>
        </div>

        <div className="mt-8 block">
          <label>
            Which most accurately describes your current throwing abilites?{" "}
            <br />
            <label className="font-thin text-lg">
              <input
                name="throwingLevel"
                type="radio"
                id="low-level"
                value="I do not usually feel comfortable with the disc and tend to only throw small resets or short range throws."
                checked={
                  this.state.throwingLevel ===
                  "I do not usually feel comfortable with the disc and tend to only throw small resets or short range throws."
                }
                onChange={this.handleChange.bind(this, "throwingLevel")}
                className="mt-1 mr-2 p-1"
              />
              I do not usually feel comfortable with the disc and tend to only
              throw small resets or short range throws.
              <br />
            </label>
            <label className="font-thin text-lg">
              <input
                type="radio"
                id="medium-level"
                value="I feel relatively comfortable with the disc and have good short and medium range throws, but I am less comfortable with long range throws or hucks."
                checked={
                  this.state.throwingLevel ===
                  "I feel relatively comfortable with the disc and have good short and medium range throws, but I am less comfortable with long range throws or hucks."
                }
                onChange={this.handleChange.bind(this, "throwingLevel")}
                className="mt-1 mr-2 p-1"
              />
              I feel relatively comfortable with the disc and have good short
              and medium range throws, but I am less comfortable with long range
              throws or hucks.
              <br />
            </label>
            <label className="font-thin text-lg">
              <input
                type="radio"
                id="high-level"
                value="I am very comfortable with the disc and feel confident throwing small, medium, and long range throws and hucks."
                checked={
                  this.state.throwingLevel ===
                  "I am very comfortable with the disc and feel confident throwing small, medium, and long range throws and hucks."
                }
                onChange={this.handleChange.bind(this, "throwingLevel")}
                className="mt-1 mr-2 p-1"
              />
              I am very comfortable with the disc and feel confident throwing
              small, medium, and long range throws and hucks.
              <br />
            </label>
            <p className="text-red text-sm font-thin mt-1">
              {this.state.errors["throwingLevel"]}
            </p>
          </label>
        </div>

        <div className="mt-8 block">
          <label>
            What are your throwing strengths? <br />
            <textarea
              name="throwingStrengths"
              type="text"
              value={this.state.throwingStrengths}
              onChange={this.handleChange.bind(this, "throwingStrengths")}
              placeholder="My current throwing strengths are..."
              className="mt-1 p-1 w-full h-32 text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
            />
            <p className="text-red text-sm font-thin mt-1">
              {this.state.errors["throwingStrengths"]}
            </p>
          </label>
        </div>

        <div className="mt-8 block">
          <label>
            What aspects of your throwing are you wanting to improve? <br />
            <textarea
              name="throwingImprovement"
              type="text"
              value={this.state.throwingImprovement}
              onChange={this.handleChange.bind(this, "throwingImprovement")}
              placeholder="I want to improve upon my..."
              className="mt-1 p-1 w-full h-32 text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
            />
            <p className="text-red text-sm font-thin mt-1">
              {this.state.errors["throwingImprovement"]}
            </p>
          </label>
        </div>

        <div className="mt-8 block">
          <label>
            Do you have the ability to film yourself throwing? (We will contact
            you later with more details on how best to do this) <br />
            <label className="font-thin text-lg">
              <input
                name="ableToFilm"
                type="radio"
                id="yes"
                value="Yes"
                checked={this.state.ableToFilm === "Yes"}
                onChange={this.handleChange.bind(this, "ableToFilm")}
                className="mt-1 mr-2 p-1"
              />
              Yes
              <br />
            </label>
            <label className="font-thin text-lg">
              <input
                type="radio"
                id="no"
                value="No"
                checked={this.state.ableToFilm === "No"}
                onChange={this.handleChange.bind(this, "ableToFilm")}
                className="mt-1 mr-2 p-1"
              />
              No
              <br />
            </label>
            <p className="text-red text-sm font-thin mt-1">
              {this.state.errors["ableToFilm"]}
            </p>
          </label>
        </div>

        <div className="mt-8 block">
          <label>
            Additional Information: <br />
            <textarea
              name="additionalInfo"
              value={this.state.additionalInfo}
              onChange={this.handleChange.bind(this, "additionalInfo")}
              placeholder=""
              className="mt-1 p-1 w-full h-48 text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
            />
            <p className="text-red text-sm font-thin mb-6 mt-1">
              {this.state.errors["additionalInfo"]}
            </p>
          </label>
        </div>

        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
          className="bg-teal-dark text-gray-light px-5 py-1 uppercase shadow-md text-shadow-sm"
        />
      </form>
    );
  }
}

function InitialConsultContent() {
  return (
    <div className="z-10">
      <PageHeader title={""} />
      <div className="bg-gray-dark -mt-2 z-0">
        <div className="p-6 pb-24 max-w-6xl container flex flex-col text-gray-light">
          <h3 className="self-end text-right font-title uppercase text-3xl">
            30 minute Initial Consultation
          </h3>
          <div className="self-end w-48 h-6 bg-teal-bright mb-6"></div>
          <p className="self-start max-w-6xl text-xl">
            Not ready to sign up for a full month of coaching? Start with a{" "}
            <span className="font-title text-white text-shadow-md text-xl">
              30 minute initial consultation for $40.
            </span>
            <br />
            <br />
            We will do a basic analysis of your current throwing mechanics and
            give you some simple feedback on where you could use improvement.
            Then, you can decide afterwards if you want to move forward with a
            month of 1-on-1 coaching and personalized drills.
            <br />
            <br />
            Fill out the form below to get started with your $40 initial
            consultation.
          </p>
          <div className="mt-10 self-center">
            <InitialConsultForm />
          </div>
          <div className="ml-4 mt-12 max-w-3xl"></div>
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

function InitialConsult() {
  return (
    <div className="bg-gray-light min-h-screen overflow-x-hidden flex flex-col">
      <ColorHeader />
      <div className="w-screen h-32 md:h-16 md:hidden bg-light-gray"></div>
      <InitialConsultContent />
      <div className="flex-grow-1 md:h-16"></div>
      <Footer />
    </div>
  );
}

export default InitialConsult;
