import React from "react";
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

const ContactForm = () => {
  return (
    <Form action="post" className="contact-form">
      <label htmlFor="message" className="text-grey">
        Dear Ijeoma,
      </label>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Write your message here..."
        required
      ></textarea>
      <br />
      <label htmlFor="name" className="mt-4 text-grey">
        Best regards,
      </label>
      <br />
      <input type="text" name="name" id="name" placeholder="Your name" required />
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
        className="mt-3"
        required
      />
      <br />
      <button type="submit" className="btn-grey mt-4 d-inline-block">Send <i className="bi bi-send-fill ms-1"></i></button>
    </Form>
  );
};

export default ContactForm;
