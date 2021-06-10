import React, { useState } from "react";

function Skills() {

  const [skills, setSkills] = useState([
    'JavaScript', 'React', 'ES6', 'Express', 'HTML/CSS', 'Axios', 'Webpack', 'Babel', 'jQuery', 'MySQL', 'MongoDB', 'Postgres', 'AWS (EC2)'
  ]);

  return (
    <div className="condiv skills">
      <h1 className="subtopic">My Skills</h1>
      <ul>
        {skills.map((value, i) => {
          return <li key={i}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
export default Skills;
