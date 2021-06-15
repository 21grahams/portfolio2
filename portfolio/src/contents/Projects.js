import React from "react";
import Widecard from "../components/Widecard";

function Projects() {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Projects</h1>
      <Widecard
        title="M.Tech Software Engineering"
        where="VIT University"
        from="July 2017"
        to="Present"
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
