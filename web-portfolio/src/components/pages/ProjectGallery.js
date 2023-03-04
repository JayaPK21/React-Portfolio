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
                                          key={project.id}
                                          title={project.title}
                                          description={project.description}
                                          image={project.image}/>)}
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
