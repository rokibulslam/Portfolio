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
    <div>
      <div className="contact-bg ">
        <div className=" container">
          <h1 className="text-center text-white fs-1 fw-bolder  py-5 ">Contact With Me</h1>
          <div className="row">
            <div className="col-md-6 mb-5">
              <h1 className="pb-4">
                <span className="text-color">Contact</span>{" "}
                <span className="text-white">Info</span>
              </h1>
              <div className="d-flex align-items-center text-white">
                <FontAwesomeIcon
                  className="contact-icon me-3"
                  icon={faEnvelope}
                  size="1x"
                />
                <h6 className="">rokibul.islam5141@gmail.com</h6>
              </div>
              <div className="d-flex align-items-center text-white">
                <FontAwesomeIcon
                  className="contact-icon me-3 "
                  icon={faPhone}
                  size="1x"
                />
                <h6 className="">+8801612225141</h6>
              </div>
              <div className="d-flex align-items-center text-white">
                <FontAwesomeIcon
                  className="contact-icon me-3"
                  icon={faHome}
                  size="1x"
                />
                <h6 className="">Pabna, Rajshahi, Bangladesh</h6>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="">
                <div className="">
                  <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="text-white">Your Name</Form.Label>
                      <Form.Control type="text" name="name" required />
                      <Form.Label className="text-white">
                        Email address
                      </Form.Label>
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
                      <Form.Label className="text-white">Message</Form.Label>
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
    </div>
  );
};
