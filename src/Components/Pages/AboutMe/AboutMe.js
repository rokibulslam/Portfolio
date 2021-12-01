import React from "react";
import { Image } from "react-bootstrap";
import profilePic from "../../../images/eidited.png";
import './AboutMe.css'
const AboutMe = () => {
  return (
    <div
      className="about-me
    "
    >
      <h1 className="text-center">About Me</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 pb-5  ">
            <Image className="img-fluid profile-pic" src={profilePic} alt="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="pt-5">
              <h1>MD Rokibul Islam</h1>
              <p>
                Despite not having a science background, I have come this far by
                my own will because I love programming and technology. My goal
                is to develop myself as a professional programmer. Becoming a
                programmer is my passion. The journey to becoming a programmer
                has just begun.
              </p>

              <div className="row pt-4">
                <div className="col-md-3 col-sm-3">
                  <div>
                    <h5>Skill</h5>
                  </div>
                </div>
                <div className="col-md-9 col-sm-9">
                  <div>
                    <div>
                      <li>
                        <b className="pe-3">Expertise:</b> HTML, CSS, Bootstrap,
                        Javascript, React, React Bootstrap, Restful API, ES6
                      </li>
                      <li>
                        <b className="pe-3">Familiar:</b>
                        Node.Js, Express.js, Material UI, MongoDB, Tailwind CSS
                      </li>
                      <li>
                        <b className="pe-3">Tools:</b>
                        VS Code, Git, Chrome Dev Tool, Firebase, Heroku,
                        Netlify, Figma, GIMP
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pt-4">
                  <div>
                    <h4>Experience</h4>
                  </div>
                </div>
                <div className="col-md-9">
                  <div>
                    <div>
                      <li>
                        System Support Trainer & Hardware Technicians at Post
                        E-center for the rural community project. ( January 2016
                        - June 2017)
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-3">
                  <div>
                    <h4>COURSES & TRAINING</h4>
                  </div>
                </div>
                <div className="col-md-9">
                  <div>
                    <div>
                      <li>
                        Complete Web Development, Programming Hero( June 2021 -
                        November 2021) (Honours)(Accounting) Passing Year: 2017
                        CGPA: 3.15
                      </li>
                      <li>
                        Computer Office Application, Bangladesh Technical
                        Education Board, Dhaka. ( Jan 2016 - June 2016)
                      </li>
                      <li>
                        {" "}
                        SSC (Science) Pabna Zilla School, Pabna. Result: GPA:
                        5.0
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-md-3">
                  <div>
                    <h4>Education</h4>
                  </div>
                </div>
                <div className="col-md-9">
                  <div>
                    <div>
                      <li>
                        BBA (Honours)(Accounting) from The National University
                        Of Bangladesh, Result: CGPA: 3.15
                      </li>
                      <li>
                        HSC (Science), Govt Shaheed Bulbul College, Pabna.
                        Result: GPA: 4.10
                      </li>
                      <li>
                        SSC (Science) Pabna Zilla School, Pabna. Result: GPA:
                        5.0
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
