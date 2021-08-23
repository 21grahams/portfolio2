import React from "react";
import { projects } from "../components/Data";

function Projects() {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Projects</h1>
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener">
              <div>
                <img
                  alt="FE3"
                  src={project.image}
                />
                <div>
                  <h2>
                    {project.subtitle}
                  </h2>
                  <h1>
                    {project.title}
                  </h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
    </div>
  );
}
export default Projects;
