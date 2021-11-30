import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { useId } = useParams()
    console.log(useId)
    const [projects, setProjects] = useState([])
    console.log(projects)
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
    
  }, [])
  console.log(typeof(useId))
  const project = projects?.filter(
    (pt) =>  pt._id === useId)
  
  
    
    return (
      <div className="mt-5">
        {
          project?.map(projectD => <h1>name: { projectD?.name}</h1>)
        }
      </div>
    );
};

export default ProjectDetails;