import React from "react";
import Widecard from "../components/Widecard";

function Projects() {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Projects</h1>
      <Widecard
        title="Software Engineer"
        where="Hack Reactor / Galvanize"
        from="2020"
        to="2021"
      />
      <Widecard
        title="Bachelor of Arts"
        where="Fort Lewis College"
        from="2008"
        to="2012"
      />
    </div>
  );
}
export default Projects;
