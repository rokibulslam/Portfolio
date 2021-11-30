import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";
import './ContactMe.css'

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h74eva6",
        "template_f9e7dqr",
        form.current,
        "user_OW6mG6syUfEdoAFFyrewa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
    );
      e.target.reset()
  };

  return (
    <div className="contact-bg">
      <h1 className="text-center py-5 ">Contact With Me</h1>
      <div className="p-5  d-flex align-items-center justify-content-center m-0">
        <div className="">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                className="input-color"
                as="textarea"
                name="message"
                rows={3}
              />
            </Form.Group>
            <input className="contact-btn" type="submit" value="Send" />
          </Form>
        </div>
      </div>
    </div>
  );
};
