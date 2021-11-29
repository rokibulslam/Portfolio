import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";

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
    <div className="m-5 container">
      <Form className="d-flex justify-content-center align-items-center flex-column" ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" required/>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} />
        </Form.Group>
        <input type="submit" value="Send" />
      </Form>
    </div>
  );
};
