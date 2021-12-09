import React, { useEffect } from "react";
import "./Intro.css";
import profilePic from "../../../../images/eidited.png";
import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-bootstrap";
import { Navigate } from "react-router";
import Typewriter from "typewriter-effect";

const Intro = () => {
  
  return (
    <div className="intro-banner py-5 text-center d-flex justify-content-center align-items-center flex-column">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
            <h1 className="">Hi! I AM </h1>
            <h1 className="text-white">MD ROKIBUL ISLAM</h1>
            <h4 className="">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Web Developer",
                    "React Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <div className="pb-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1uQh1v9YSibwgf37IWyKMo43hSz8IDhmP"
                download
              >
                <Button className="intro-button">Download Resume</Button>
              </a>

              {/* <NavLink to="aboutMe">
                <Button className="intro-button">Hire Me</Button>
              </NavLink> */}
            </div>
            <div className="">
              <a
                href="https://www.linkedin.com/in/rokibulslam/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="intro-icon"
                  icon={faLinkedin}
                  size="3x"
                />
              </a>
              <a href="https://github.com/rokibulslam" target="_blank">
                <FontAwesomeIcon
                  className="intro-icon"
                  icon={faGithub}
                  size="3x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
