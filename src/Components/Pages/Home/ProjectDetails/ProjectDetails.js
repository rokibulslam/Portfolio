import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { useId } = useParams();
  console.log(useId);
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(typeof useId);
  const project = projects?.filter((pt) => pt._id === useId);

  return (
    <div className="mt-5 projectD">
      <div className="container">
        {project?.map((projectD) => (
          <div>
            <h1 className="text-center">name: {projectD?.name}</h1>
            <div className="row g-5">
              <div className="col-md-6">
                <Card className="bg-dark text-white h-100 w-100">
                  <Card.Img
                    className="img-fluid"
                    src={projectD.pic1}
                    alt="Card image"
                  />
                </Card>
              </div>
              <div className="col-md-6">
                <Card className="bg-dark text-white h-100 w-100">
                  <Card.Img
                    className="offcanvas-body"
                    src={projectD.pic2}
                    alt="Card image"
                  />
                </Card>
              </div>
              <div className="col-md-6">
                <Card className="bg-dark text-white h-100 w-100">
                  <Card.Img src={projectD.pic3} alt="Card image" />
                </Card>
              </div>
              <div className="col-md-6">
                <Card className="bg-dark text-white h-100 w-100">
                  <Card.Img src={projectD.pic4} alt="Card image" />
                </Card>
              </div>
            </div>
            <div className="mt-5">
              <h1>Features Of {projectD.name}</h1>
              <div>
                <ul>
                  <li>{projectD.dis1}</li>
                  <li>{projectD.dis2}</li>
                  <li>{projectD.dis3}</li>
                  <li>{projectD.dis4}</li>
                  <li>{projectD.dis5}</li>
                </ul>
                <div>
                  <h3>Tools</h3>
                  <ul>
                    <li>{ projectD.tools}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
