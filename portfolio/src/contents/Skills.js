import React from "react";
import JS from "../img/JS.png";
import ReactLogo from "../img/React.png";
import ExpressLogo from "../img/express.png";
import HTMLLogo from "../img/HTML.png";
import AxiosLogo from "../img/Axios.png";
import WebpackLogo from "../img/Webpack.png";
import BabelLogo from "../img/Babel.png";
import jQueryLogo from "../img/jQuery.png";
import MySQLLogo from "../img/MySQL.png";
import MongoLogo from "../img/Mongo.png";
import PostgresLogo from "../img/Postgres.png";
import AWSLogo from "../img/AWS.png";

function Skills() {
  return (
    <div className="condiv skills">
      <h1 className="subtopic">My Skills:</h1>
      <img className="skillLogos" src={JS} alt="JS"></img>
      <img className="skillLogos" src={ReactLogo} alt="ReactLogo"></img>
      <img className="skillLogos" src={ExpressLogo} alt="ExpressLogo"></img>
      <img className="skillLogos" src={HTMLLogo} alt="HTMLLogo"></img>
      <img className="skillLogos" src={AxiosLogo} alt="AxiosLogo"></img>
      <img className="skillLogos" src={WebpackLogo} alt="WebpackLogo"></img>
      <img className="skillLogos" src={BabelLogo} alt="BabelLogo"></img>
      <img className="skillLogos" src={jQueryLogo} alt="jQuery"></img>
      <img className="skillLogos" src={MySQLLogo} alt="MySQLLogo"></img>
      <img className="skillLogos" src={MongoLogo} alt="Mongo"></img>
      <img className="skillLogos" src={PostgresLogo} alt="Postgres"></img>
      <img className="skillLogos" src={AWSLogo} alt="AWSLogo"></img>
    </div>
  );
}
export default Skills;
