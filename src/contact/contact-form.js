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
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;

    let templateParams = {
      from_name: name,
      to_name: "jamieeriksson@gmail.com",
      reply_to: email,
      subject: subject,
      message_html: message,
    };

    emailjs.send(
      "gmail",
      "template_XXXXXXXX",
      templateParams,
      "user_XXXXXXXXXXXXXXXXXXXX"
    );

    this.resetForm();
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

  render() {
    return (
      <form className="font-semibold">
        <div className="flex">
          <label>
            Name: <br />
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Your name"
              className="mb-6 mt-1 mr-10 p-1 w-64 text-gray-dark"
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
              className="mb-6 mt-1 p-1 w-64 text-gray-dark"
            />
            <br />
          </label>
        </div>
        <label>
          Subject: <br />
          <input
            name="subject"
            type="text"
            value={this.state.subject}
            onChange={this.handleChange.bind(this, "subject")}
            placeholder="Interest in Throwing Coaching"
            className="mb-6 mt-1 p-1 w-full text-gray-dark"
          />
          <br />
        </label>
        <label>
          Message: <br />
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange.bind(this, "message")}
            placeholder="Your message"
            className="mb-6 mt-2 p-1 w-full h-64 text-gray-dark"
          />
        </label>
        <br />

        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
          className="bg-teal-dark px-5 py-1"
        />
      </form>
    );
  }
}

export default ContactForm;
