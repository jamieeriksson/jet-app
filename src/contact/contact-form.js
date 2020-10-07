import React from "react";
import "../tailwind.output.css";
import * as emailjs from "emailjs-com";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {},
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let valid = this.handleValidation();

    if (valid) {
      const { name, email, subject, message } = this.state;
      let templateParams = {
        user_name: name,
        to_name: "jamieeriksson@gmail.com",
        user_email: email,
        subject: subject,
        message_html: message,
      };

      emailjs
        .send(
          "jet_contact_service",
          "jet_contact_template",
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

      alert("Form submitted");
    }
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  handleValidation() {
    let name = this.state.name;
    let email = this.state.email;
    let subject = this.state.subject;
    let message = this.state.message;
    let errors = {};
    let formIsValid = true;

    // Name validation
    if (!name) {
      formIsValid = false;
      errors["name"] = "Please enter a name";
    }

    // Email validation
    if (!email) {
      formIsValid = false;
      errors["email"] = "Please enter a name";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors["email"] = "Please enter a valid email";
    }

    // Subject validation
    if (!subject) {
      formIsValid = false;
      errors["subject"] = "Please enter a subject";
    }

    // Message validation
    if (!message) {
      formIsValid = false;
      errors["message"] = "Please enter a message";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  render() {
    return (
      <form className="font-semibold">
        <div className="flex flex-wrap">
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
          </label>
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
          </label>
          <div className="w-full"></div>
          <p className="text-red text-sm font-thin mt-1 mr-10 w-64">
            {this.state.errors["name"]}
          </p>
          <p className="text-red text-sm font-thin mt-1 w-64">
            {this.state.errors["email"]}
          </p>
        </div>
        <label className="mt-4 block">
          Subject: <br />
          <input
            name="subject"
            type="text"
            value={this.state.subject}
            onChange={this.handleChange.bind(this, "subject")}
            placeholder="Interest in Throwing Coaching"
            className="mt-1 p-1 w-full text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
          />
          <p className="text-red text-sm font-thin mt-1">
            {this.state.errors["subject"]}
          </p>
        </label>
        <label className="mt-4 block">
          Message: <br />
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange.bind(this, "message")}
            placeholder="Your message"
            className="mt-1 p-1 w-full h-64 text-gray-dark shadow-md border-gray-dark rounded border border-opacity-25 bg-gray-light"
          />
        </label>
        <p className="text-red text-sm font-thin mb-6 mt-1">
          {this.state.errors["message"]}
        </p>

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

export default ContactForm;
