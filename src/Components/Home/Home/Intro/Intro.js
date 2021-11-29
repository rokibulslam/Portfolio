import React from "react";
import "./Intro.css";
import profilePic from "../../../../images/eidited.png";
import Button from "@restart/ui/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Intro = () => {
  return (
    <div className="intro-banner py-5 text-center">
      <div className="py-5">
        <div className="row align-items-center">
          <div className="col-md-6 pb-5">
            <div>
              <h1 className="text-white">I AM MD ROKIBUL ISLAM</h1>
              <h3 className="text-warning">FRONTEND WEB DEVELOPER</h3>
              <p className="text-white">
                I am Rokibul Islam, from planet with a passion of Web, Graphic
                and Interactive design. <br /> I specialise in standards
                compliant websites with a focus on usability. <br />{" "}
                Enthusiastic about life, design and innovation.
              </p>
              <div className="d-flex align-items-center justify-content-center">
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
          <div className="col-md-6">
            <div className="">
              <img className="profile-pic img-fluid" src={profilePic} alt="" />
              <div>
                <Button className="intro-button">Download Resume</Button>
                <Button className="intro-button">Hire Me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
