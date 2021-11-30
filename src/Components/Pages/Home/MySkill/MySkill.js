import React from 'react';
import './MySkill.css'


const MySkill = () => {
    return (
      <div className="skills-banner py-5">
        <h1 className="text-center">MY SKILLS</h1>
        <div className="container ">
          <div className="row justify-content-evenly">
            <div class="skill-container col-md-4 col-sm-12">
              <ul>
                
                <li className="html">HTML</li>
                <li className="css">CSS</li>
                <li className="react-bootstrap">React Bootstrap</li>
                <li className="material">Material UI</li>
              </ul>
            </div>
            <div class="skill-container col-md-4 col-sm-12">
              <ul>
                
                <li className="javascript">Javascript</li>
                <li className="react">React.Js</li>
                <li className="node">Node.JS</li>

                <li className="express">Express.js</li>
              </ul>
            </div>
            <div class="skill-container col-md-4 col-sm-12">
              <ul>
                <li className="mongodb">Mongdb</li>
                <li className="vs">VS Code</li>
                <li className="firebase">Firebase</li>
                <li className="github">Github</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MySkill;