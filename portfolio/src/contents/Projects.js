import React from "react";
import { projects } from "../components/Data";

function Projects() {

  return (
    <div className="condiv">
      <h1 className="subtopic">My Projects</h1>
      {projects.map((project, i) => (
        <div key={i}>
          <span className="projectTitle">{project.title}</span>
          <br></br>
          <p className="projectDescription">{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer noopener">
            <img
              className="projectPicture"
              alt="projectpics"
              src={project.image}>
              </img>
            <br></br>
            <br></br>
          </a>
        </div>
      ))}
    </div>
  );
}
export default Projects;
