import React from "react";
import Project from "./Project";
import projectData from "../../projects.json";

function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery Page</h1>
      <div className="container-fluid">
        <div className="row">
          {projectData.map((project) => <Project 
                                          title={project.title}
                                          description={project.description}/>)}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
