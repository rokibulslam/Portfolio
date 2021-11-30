import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";
import './ContactMe.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";


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
    <div className="contact-bg ">
      <div className=" container">
        <h1 className="text-center py-5 ">Contact With Me</h1>
        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="pb-4">
              <span className="text-danger">Contact</span>{" "}
              <span className="text-white">Info</span>
            </h1>
            <div className="d-flex">
              <FontAwesomeIcon
                className="contact-icon me-3"
                icon={faEnvelope}
                size="2x"
              />
              <h4 className="">rokibulislam4151@gmail.com</h4>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                className="contact-icon me-3 "
                icon={faPhone}
                size="2x"
              />
              <h4 className="">+8801735754758</h4>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                className="contact-icon me-3"
                icon={faHome}
                size="2x"
              />
              <h4 className="">Pabna, Rajshahi, Bangladesh</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5 ">
              <div className="">
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" required />
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
        </div>
      </div>
    </div>
  );
};
