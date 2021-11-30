import React, { useEffect } from "react";
import "./Intro.css";
import profilePic from "../../../../images/eidited.png";
import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-bootstrap";
import { Navigate } from "react-router";


const Intro = () => {
  return (
    <div className="intro-banner py-5 text-center d-flex justify-content-center align-items-center flex-column">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div data-aos="fade-up">
            <h1 className="">Hi! I AM </h1>
            <h1 className="text-white">MD ROKIBUL ISLAM</h1>
            <h4 className="">FRONTEND WEB DEVELOPER</h4>
            <div className="pb-3">
              <a
                href="https://drive.google.com/uc?export=download&id=19mAo0Bh-C1-cRbpb3R_UxUNpFndcqrul"
                download
              >
                <Button className="intro-button">Download Resume</Button>
              </a>

              {/* <NavLink to="aboutMe">
                <Button className="intro-button">Hire Me</Button>
              </NavLink> */}
            </div>
            <div className="">
              <FontAwesomeIcon
                className="intro-icon"
                icon={faLinkedin}
                size="3x"
              />
              <FontAwesomeIcon
                className="intro-icon"
                icon={faGithub}
                size="3x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
