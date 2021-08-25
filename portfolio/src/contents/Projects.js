import React from "react";
import { projects } from "../components/Data";

function Projects() {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Projects</h1>
      {projects.map((project, i) => (
        <div>
          <span className="projectTitle">{project.title}</span>
          <p className="projectDescription">{project.description}</p>
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <img
                className="projectPicture"
                alt="projectpics"
                src={project.image}
              ></img>
            </span>
            <br></br>
            <br></br>
          </a>
        </div>
      ))}
    </div>
  );
}
export default Projects;
