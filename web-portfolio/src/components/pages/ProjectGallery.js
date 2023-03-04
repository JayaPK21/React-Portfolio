import React from "react";
import Project from "./Project";

function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery Page</h1>
      <div className="container-fluid">
        <div className="row">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
