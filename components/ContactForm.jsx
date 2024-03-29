import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    document.getElementById("form-message").innerHTML = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        document.getElementById("form-message").innerHTML =
          '<i class="bi bi-check-circle-fill text-success me-2"></i>' +
          " " +
          "Thank you. Your message has been submitted.";
        // console.log("Thank You!");
        document
          .querySelectorAll("#contact-form input, #contact-form textarea")
          .forEach((e) => {
            e.value = "";
          });
      })
      .catch((error) => {
        document.getElementById("form-message").innerHTML =
          '<i class="bi bi-x-circle-fill text-danger me-2"></i> There was a problem sending your message!! 🙁';
        // alert(error)
      });
  };

  return (
    <Form
      id="contact-form"
      name="Contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
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
        placeholder="Write your message here..."
        required
        onChange={handleChange}
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
        placeholder="Your name"
        required
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
        className="mt-3"
        required
        onChange={handleChange}
      />
      <br />
      <div className="row justify-content-between align-items-center mt-4">
        <div className="col-12 col-sm-3 col-lg mb-5 mb-sm-0">
          <button type="submit" className="btn-orange  d-inline-block">
            Send <i className="bi bi-send-fill ms-1"></i>
          </button>
        </div>
        <div className="col">
          <p id="form-message" className="mb-0 text-center text-sm-end"></p>
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
