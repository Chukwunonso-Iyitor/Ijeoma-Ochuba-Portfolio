import React, { Component } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  label {
    margin-bottom: 1rem;
    font-size: 18px;
  }
  input {
    &[type="text"],
    &[type="email"] {
      width: 100%;
      padding: 0.5rem 0.6rem;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      &:focus {
        outline: none;
      }
    }
  }
  textarea {
    width: 100%;
    padding: 0.5rem 0.6rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    &:focus {
      outline: none;
    }
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        name="Contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="contact-form"
      >
        <input type="hidden" name="Contact" value="contact" />

        <label htmlFor="message" className="text-grey">
          Dear Ijeoma,
        </label>
        <br />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          //   value={message}
          onChange={this.handleChange}
          placeholder="Write your message here..."
          required
        ></textarea>
        <br />
        <label htmlFor="name" className="mt-4 text-grey">
          Best regards,
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          //   value={name}
          onChange={this.handleChange}
          placeholder="Your name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          //   value={email}
          onChange={this.handleChange}
          placeholder="Your email"
          className="mt-3"
          required
        />
        <br />
        <div className="row justify-content-between">
          <div className="col">
            <button type="submit" className="btn-grey mt-4 d-inline-block">
              Send <i className="bi bi-send-fill ms-1"></i>
            </button>
          </div>
          <div className="col">
            <p id="form-message"></p>
          </div>
        </div>
      </Form>
    );
  }
}

export default ContactForm;
